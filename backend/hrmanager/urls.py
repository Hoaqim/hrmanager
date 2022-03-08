from rest_framework import routers

from .views import EmployeeViewSet


router = routers.DefaultRouter()
router.register('api/employees', EmployeeViewSet, 'employees')

urlpatterns = router.urls