import pandas as pd
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load the dataset from CSV
data = pd.read_csv("D:/GitHub/Cardiomate/backend/heart.csv")

# Split the dataset into features (X) and target variable (y)
X = data.drop("target", axis=1)
y = data["target"]

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train the Random Forest Classifier
model = RandomForestClassifier()
model.fit(X, y)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)


@csrf_exempt
def make_prediction_logic(
    age,
    sex,
    chest_pain_type,
    blood_press,
    cholesterol,
    sugar_level,
    electrocardiogram,
    heart_rate,
    angina,
    st_depress,
    st_segment,
    vessels,
    thal,
):
    # Retrieve the user input from the request
    print("Predict.model.py")

    print(age)
    print(sex)
    print(chest_pain_type)
    print(blood_press)
    print(cholesterol)
    print(sugar_level)
    print(electrocardiogram)
    print(heart_rate)
    print(angina)
    print(st_depress)
    print(st_segment)
    print(vessels)
    print(thal)

    user_input = [
        int(age),
        int(sex),
        int(chest_pain_type),
        float(blood_press),
        float(cholesterol),
        int(sugar_level),
        int(electrocardiogram),
        float(heart_rate),
        int(angina),
        float(st_depress),
        int(st_segment),
        int(vessels),
        int(thal),
    ]

    # # Perform prediction on user input
    prediction = model.predict([user_input])
    probability = model.predict_proba([user_input])[0][1] * 100

    if prediction == 0:
        result = "You Are Safe!"
    else:
        result = "You Are In Risk!"

    # Return the prediction result as a JSON response
    response_data = {
        "result": result,
        "probability": probability,
    }
    # return JsonResponse(response_data)
    return result, probability

    # Return an error response if the request method is not POST
    # return JsonResponse({"error": "Invalid request method"})


# Example usage: make_prediction(request)
