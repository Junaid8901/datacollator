from django.core.mail import EmailMessage
from django.core.mail import send_mail
from conf import settings
from conf.celery import app


@app.task()
def send_email(data):
    email=EmailMessage(subject=data['email_subject'], body=data['email_body'],from_email=settings.EMAIL_HOST_USER, to=[data['to_email']])
    email.send()
