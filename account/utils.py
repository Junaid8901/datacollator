from django.core.validators import RegexValidator
from django.utils.encoding import force_text
from rest_framework import pagination, status
from rest_framework.exceptions import APIException
from rest_framework.response import Response


class CustomPagination(pagination.PageNumberPagination):
    def get_from(self):
        return int((self.page.paginator.per_page * self.page.number) - self.page.paginator.per_page + 1)

    def get_to(self):
        return self.get_from() + int(len(self.page.object_list)) - 1

    def get_paginated_response(self, data):
        return Response({
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'count': self.page.paginator.count,
            'total_pages': self.page.paginator.num_pages,
            'page_number': self.page.number,
            'per_page': self.page.paginator.per_page,
            'from': self.get_from(),
            'to': self.get_to(),
            'results': data
        })


user_permission_choices = [

    ('view_user', 'Can View User'),
    ('add_user', 'Can Add User'),
    ('update_user', 'Can Update User'),
    ('delete_user', 'Can Delete User'),
    
    ('view_user_role', 'Can View User Role'),
    ('add_user_role', 'Can Add User Role'),
    ('update_user_role', 'Can Update User Role'),
    ('delete_user_role', 'Can Delete User Role'),

    ('view_department', 'Can View department'),
    ('add_department', 'Can Add department'),
    ('update_department', 'Can Update department'),
    ('delete_department', 'Can Delete department'),
]
