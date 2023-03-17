from django.contrib import admin
from .models import RoleRegistration

# Register your models here.
admin.site.register(RoleRegistration)
from .models import Image
admin.site.register(Image)