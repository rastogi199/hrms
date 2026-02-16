from rest_framework import serializers
from .models import Employee, Attendance
from django.db.models import Count, Q


class EmployeeSerializer(serializers.ModelSerializer):
    total_present = serializers.SerializerMethodField()
    total_absent = serializers.SerializerMethodField()

    class Meta:
        model = Employee
        fields = '__all__'

    def get_total_present(self, obj):
        return obj.attendance.filter(status='Present').count()

    def get_total_absent(self, obj):
        return obj.attendance.filter(status='Absent').count()


class AttendanceSerializer(serializers.ModelSerializer):
    employee_name = serializers.CharField(source="employee.full_name", read_only=True)

    class Meta:
        model = Attendance
        fields = '__all__'
