from django.http import JsonResponse, HttpRequest
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate, login
from .models import PrivateUser

from predictModel import make_prediction_logic


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


@api_view(["POST"])
def make_prediction(request):
    # Extract input values from the request data
    try:
        age = request.data.get("age")
        sex = request.data.get("sex")
        chest_pain_type = request.data.get("chestPainType")
        blood_press = request.data.get("bloodpress")
        cholesterol = request.data.get("cholesterol")
        sugar_level = request.data.get("sugarlevel")
        electrocardiogram = request.data.get("electrocardiogram")
        heart_rate = request.data.get("heartRate")
        angina = request.data.get("angina")
        st_depress = request.data.get("stdepress")
        st_segment = request.data.get("stsegment")
        vessels = request.data.get("vessels")
        thal = request.data.get("thal")
    except Exception as e:
        print("Exception:", e)
        return JsonResponse({"error": "Invalid input values"})

    # Perform prediction using the make_prediction function
    if request.method == "POST":
        prediction, probability = make_prediction_logic(
            age=int(age),
            sex=int(sex),
            chest_pain_type=int(chest_pain_type),
            blood_press=float(blood_press),
            cholesterol=float(cholesterol),
            sugar_level=int(sugar_level),
            electrocardiogram=int(electrocardiogram),
            heart_rate=float(heart_rate),
            angina=int(angina),
            st_depress=float(st_depress),
            st_segment=int(st_segment),
            vessels=int(vessels),
            thal=int(thal),
        )
        # prediction, probability = make_prediction_logic(
        #     {
        #         "age": int(age) if age else 0,
        #         "sex": int(sex) if sex else 0,
        #         "chest_pain_type": int(chest_pain_type) if chest_pain_type else 0,
        #         "blood_press": float(blood_press) if blood_press else 0.0,
        #         "cholesterol": float(cholesterol) if cholesterol else 0.0,
        #         "sugar_level": int(sugar_level) if sugar_level else 0,
        #         "electrocardiogram": int(electrocardiogram) if electrocardiogram else 0,
        #         "heart_rate": float(heart_rate) if heart_rate else 0.0,
        #         "angina": int(angina) if angina else 0,
        #         "st_depress": float(st_depress) if st_depress else 0.0,
        #         "st_segment": int(st_segment) if st_segment else 0,
        #         "vessels": int(vessels) if vessels else 0,
        #         "thal": int(thal) if thal else 0,
        #     }
        # )

        # Prepare the response
        if prediction == 0:
            result = "You Are Safe!"
        else:
            result = "Manujaya mahathata pin sidda wewaa!"

        response = {
            "result": result,
            "probability": probability,
        }

        return JsonResponse(response)
