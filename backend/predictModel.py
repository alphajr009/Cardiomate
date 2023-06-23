import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load the dataset from CSV
data = pd.read_csv('C:/Users/stere/OneDrive/Documents/GitHub/cardiomate/backend/heart.csv')

# Split the dataset into features (X) and target variable (y)
X = data.drop('target', axis=1)
y = data['target']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the Random Forest Classifier
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)

# Ask for user input
user_input = []
print("Please provide the following information:")
user_input.append(int(input("Age: ")))
user_input.append(int(input("Sex (0: Female, 1: Male): ")))
user_input.append(int(input("Chest pain type (1-4): ")))
user_input.append(float(input("Resting blood pressure: ")))
user_input.append(float(input("Serum cholestoral in mg/dl: ")))
user_input.append(int(input("Fasting blood sugar > 120 mg/dl (0: No, 1: Yes): ")))
user_input.append(int(input("Resting electrocardiographic results (0-2): ")))
user_input.append(float(input("Maximum heart rate achieved: ")))
user_input.append(int(input("Exercise induced angina (0: No, 1: Yes): ")))
user_input.append(float(input("ST depression induced by exercise relative to rest: ")))
user_input.append(int(input("Slope of the peak exercise ST segment (0-2): ")))
user_input.append(int(input("Number of major vessels (0-3) colored by flourosopy: ")))
user_input.append(int(input("Thal (0: Normal, 1: Fixed defect, 2: Reversible defect): ")))

# Perform prediction on user input
prediction = model.predict([user_input])
probability = model.predict_proba([user_input])[0][1] * 100

if prediction[0] == 0:
    result = "You Are Safe!"
else:
    result = "You Are In Risk!"

print(result)
print("Probability:", probability, "%")
