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
def make_prediction(request):
    if request.method == "POST":
        # Retrieve the user input from the request
        user_input = [
            int(request.POST.get("age")),
            int(request.POST.get("sex")),
            int(request.POST.get("chestPainType")),
            float(request.POST.get("bloodpress")),
            float(request.POST.get("cholesterol")),
            int(request.POST.get("sugarlevel")),
            int(request.POST.get("electrocardiogram")),
            float(request.POST.get("heartRate")),
            int(request.POST.get("angina")),
            float(request.POST.get("stdepress")),
            int(request.POST.get("stsegment")),
            int(request.POST.get("vessels")),
            int(request.POST.get("thal")),
        ]

        # Perform prediction on user input
        prediction = model.predict([user_input])
        probability = model.predict_proba([user_input])[0][1] * 100

        if prediction[0] == 0:
            result = "You Are Safe!"
        else:
            result = "You Are In Risk!"

        # Return the prediction result as a JSON response
        response_data = {
            "result": result,
            "probability": probability,
        }
        return JsonResponse(response_data)

    # Return an error response if the request method is not POST
    return JsonResponse({"error": "Invalid request method"})


# Example usage: make_prediction(request)
