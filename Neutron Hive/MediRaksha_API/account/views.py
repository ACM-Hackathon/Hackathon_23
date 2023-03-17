from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse, Http404
from medicine.models import Medicine
from medicine.serializers import MedicineSerializer
from django.db.models import Q
from rest_framework.views import APIView
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from .models import Account
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
# Create your views here.

@api_view(['POST'])
def loginUser(request):
    try:
        username = request.data['username']
        password = request.data['password']
        user = authenticate(request, username=username, password=password)
        login(request, user)
        return Response({"success" : "true"})
    except Exception as e:
        return Response({
                "success" : "false",
                "error" : str(e)
            })
    
@api_view(['GET'])
def userData(request):
    try:
        account = request.user.account
        data = {
            'username' : str(request.user),
            'email' : str(request.user.email),
            'type' : str(account.type),
            'address' : str(account.address)
        }
        return Response(data)
    except Exception as e:
        return Response({
            "success" : "false",
            "error" : str(e)
        })

@api_view(['POST'])
def registerUser(request):
    try:
        username = request.data['username']
        email = request.data['email']
        password = request.data['password']
        user = User.objects.create_user(username=username, password=password, email=email)
        user.save()
        account = Account(user=user, type="user", address="")
        account.save()
        return Response({"success" : "true"})
    except Exception as e:
        return Response(
            {
                "success" : "false",
                "error" : str(e)
            }
        )

@api_view(['POST'])
def registerOracle(request):
    try:
        username = request.data['username']
        email = request.data['email']
        password = request.data['password']
        address = request.data['address']
        user = User.objects.create_user(username=username, password=password, email=email)
        user.save()
        account = Account(user=user, type="oracle", address=address)
        account.save()
        return Response({"success" : "true"})
    except Exception as e:
        return Response(
            {
                "success" : "false",
                "error" : str(e)
            }
        )


@api_view(['GET'])
def logoutUser(request):
    logout(request)
    return Response({
        "success" : "true"
    })