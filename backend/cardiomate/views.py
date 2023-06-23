from django.http import JsonResponse
from .models import PrivateUser


def signup(request):
    if request.method == "POST":
        fullname = request.POST.get("fullname")
        username = request.POST.get("username")
        password = request.POST.get("password")
        dob = request.POST.get("dob")
        nic = request.POST.get("nic")
        currentMedicalSituation = request.POST.get("currentMedicalSituation")
        email = request.POST.get("email")
        permanetadd = request.POST.get("permanetadd")
        contact = request.POST.get("contact")

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
        return JsonResponse({"message": "User registered successfully"})

    return JsonResponse({"error": "Invalid request method"})
