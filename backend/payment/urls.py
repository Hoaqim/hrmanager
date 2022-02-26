from django.conf.urls import url
from .views import test_payment

urlpatterns = [
    url(r'^test-payment/$', test_payment),
]