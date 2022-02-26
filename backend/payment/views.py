from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import stripe
stripe.api_key = 'sk_test_51KXNW9B8Cwjy3SIYUichTYbAAGFouOx5v3lQ2DG9OUVrKxQ4e1SOvCBQQOx3m9DKUYKdqoF8mSA1CGAW5i1Se7tr00HYC22Ndj'

@api_view(['POST'])
def test_payment(request):
    test_payment_intent = stripe.PaymentIntent.create(
    amount=1000, currency='pln', 
    payment_method_types=['card'],
    receipt_email='test@example.com')
    return Response(status=status.HTTP_200_OK, data=test_payment_intent)