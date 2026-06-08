from fastapi import APIRouter

from schemas.prediction_schema import StudentInput

from utils.preprocessing import preprocess_student

from services.predictor import predict_student
from services.shap_explainer import get_top_risk_factors
from services.intervention_engine import generate_interventions


router = APIRouter()


@router.post("/predict")
def predict(student: StudentInput):

    # Convert Pydantic model to dictionary
    student_data = student.model_dump()

    # Preprocess input
    processed_df = preprocess_student(student_data)

    # Prediction
    prediction_result = predict_student(processed_df)

    # SHAP explanations
    top_factors = get_top_risk_factors(processed_df)

    # Interventions
    interventions = generate_interventions(top_factors)

    # Final response
    return {
        **prediction_result,
        "top_factors": top_factors,
        "interventions": interventions
    }