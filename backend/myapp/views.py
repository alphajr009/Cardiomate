from django.http import JsonResponse, HttpRequest
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate, login
from .models import PrivateUser
from predictModel import make_prediction


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
    # Convert the request data to an HttpRequest object
    http_request = HttpRequest()
    http_request.method = request.method
    http_request.POST = request.data

    # Extract input values from the request data
    age = http_request.POST.get("age")
    sex = http_request.POST.get("sex")
    chest_pain_type = http_request.POST.get("chestPainType")
    blood_press = http_request.POST.get("bloodpress")
    cholesterol = http_request.POST.get("cholesterol")
    sugar_level = http_request.POST.get("sugarlevel")
    electrocardiogram = http_request.POST.get("electrocardiogram")
    heart_rate = http_request.POST.get("heartRate")
    angina = http_request.POST.get("angina")
    st_depress = http_request.POST.get("stdepress")
    st_segment = http_request.POST.get("stsegment")
    vessels = http_request.POST.get("vessels")
    thal = http_request.POST.get("thal")

    # Perform validation and type conversion
    try:
        age = int(age) if age else 0
        sex = int(sex) if sex else 0
        chest_pain_type = int(chest_pain_type) if chest_pain_type else 0
        blood_press = float(blood_press) if blood_press else 0.0
        cholesterol = float(cholesterol) if cholesterol else 0.0
        sugar_level = int(sugar_level) if sugar_level else 0
        electrocardiogram = int(electrocardiogram) if electrocardiogram else 0
        heart_rate = float(heart_rate) if heart_rate else 0.0
        angina = int(angina) if angina else 0
        st_depress = float(st_depress) if st_depress else 0.0
        st_segment = int(st_segment) if st_segment else 0
        vessels = int(vessels) if vessels else 0
        thal = int(thal) if thal else 0
    except ValueError:
        return JsonResponse({"error": "Invalid input data"})

    # Perform prediction using the make_prediction function
    prediction, probability = make_prediction(
        {
            "age": age,
            "sex": sex,
            "chest_pain_type": chest_pain_type,
            "blood_press": blood_press,
            "cholesterol": cholesterol,
            "sugar_level": sugar_level,
            "electrocardiogram": electrocardiogram,
            "heart_rate": heart_rate,
            "angina": angina,
            "st_depress": st_depress,
            "st_segment": st_segment,
            "vessels": vessels,
            "thal": thal,
        }
    )

    # Prepare the response
    if prediction == 0:
        result = "You Are Safe!"
    else:
        result = "You Are In Risk!"

    response = {
        "result": result,
        "probability": probability,
    }

    return JsonResponse(response)
