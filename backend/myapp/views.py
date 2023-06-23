from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate, login
from .models import PrivateUser


@api_view(["POST"])
def signup(request):
    fullname = request.data.get("fullname")
    username = request.data.get("username")
    password = request.data.get("password")
    dob = request.data.get("dob")
    nic = request.data.get("nic")
    currentMedicalSituation = request.data.get("currentMedicalSituation")
    email = request.data.get("email")
    permanetadd = request.data.get("permanetadd")
    contact = request.data.get("contact")

    if fullname:
        user = PrivateUser(
            pfullname=fullname,
            username=username,
            passwrd=password,
            datofbirth=dob,
            nationalid=nic,
            currentmedicalsituatio=currentMedicalSituation,
            Email=email,
            address=permanetadd,
            contactnumber=contact,
        )
        user.save()

        # Generate JWT token
        refresh = RefreshToken.for_user(user)
        token = str(refresh.access_token)

        return JsonResponse({"message": "User registered successfully", "token": token})
    else:
        return JsonResponse({"error": "Full Name is required"})


@api_view(["POST"])
def loginuser(request):
    username = request.data.get("username")
    password = request.data.get("password")

    try:
        users = PrivateUser.objects.filter(username=username)
        if users.exists():
            # Retrieve the first user from the queryset
            user = users.first()

            if user.passwrd == password:
                # Authentication successful
                # Set session or return token for further authentication
                return JsonResponse({"message": "Login successful"})
            else:
                # Invalid password
                return JsonResponse({"error": "Invalid credentials"})
        else:
            # User not found
            return JsonResponse({"error": "Invalid credentials"})

    except PrivateUser.DoesNotExist:
        # User not found
        return JsonResponse({"error": "Invalid credentials"})
