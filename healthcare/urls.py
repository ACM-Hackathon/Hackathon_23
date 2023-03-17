# manually created
from django.contrib import admin
from django.urls import path
from . import views
from . import views

urlpatterns = [
    path('', views.index, name = 'index'),
    # path('xray', views.xray, name = 'xray'),
    path('register/p', views.register,name='register'),
    path('login', views.login, name='login'),
    path('logout', views.logout,name='logout'),
    # path('success', views.success, name='success'),
    path('xray', views.image_upload_view),
    path('predict-image/', views.predict_image, name='predict_image'),
    # path('upload_image', views.upload_image, name='upload_image'),

]
