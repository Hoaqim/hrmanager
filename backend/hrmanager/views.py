from rest_framework import viewsets
from .serializers import  EmployeeSerializer
from .models import Employee

class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class = EmployeeSerializer
    queryset= Employee.objects.all()
