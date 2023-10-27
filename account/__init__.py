from django.core.validators import RegexValidator


phone_number_validator = RegexValidator("[^a-zA-Z]", "Enter a valid phone number")

status_choices=[
    ("active","active"),
    ("inactive","inactive")]

employee_choices=[
    ("HR","HR"),
    ("employee","employee"),
    ("Manager","Manager")]
