from utils.preprocessing import preprocess_student
from services.predictor import predict_student
from services.shap_explainer import get_top_risk_factors
from services.intervention_engine import generate_interventions


student = {
    "school": "GP",
    "sex": "F",
    "age": 17,
    "address": "U",
    "famsize": "GT3",
    "Pstatus": "T",
    "Medu": 4,
    "Fedu": 4,
    "Mjob": "teacher",
    "Fjob": "services",
    "reason": "course",
    "guardian": "mother",
    "traveltime": 1,
    "studytime": 2,
    "failures": 0,
    "schoolsup": "no",
    "famsup": "yes",
    "paid": "no",
    "activities": "yes",
    "internet": "yes",
    "romantic": "no",
    "famrel": 4,
    "freetime": 3,
    "goout": 3,
    "Dalc": 1,
    "Walc": 1,
    "health": 5,
    "absences": 2,
    "G1": 13,
    "G2": 14
}

print("\n========== PREPROCESSING ==========")

processed = preprocess_student(student)

print(processed.shape)

print("\n========== PREDICTION ==========")

prediction = predict_student(processed)

print(prediction)

print("\n========== SHAP ==========")

factors = get_top_risk_factors(processed)

print(factors)

if factors:
    for factor in factors:
        print(type(factor))

        if isinstance(factor, dict):
            for key, value in factor.items():
                print(
                    key,
                    type(value),
                    value
                )

print("\n========== INTERVENTIONS ==========")

interventions = generate_interventions(factors)

print(interventions)

print("\n========== FINAL RESPONSE ==========")

response = {
    **prediction,
    "top_factors": factors,
    "interventions": interventions
}

print(response)