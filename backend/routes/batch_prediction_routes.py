from fastapi import APIRouter, UploadFile, File
import pandas as pd

from utils.preprocessing import (
    preprocess_student
)

from services.predictor import (
    predict_student
)

from services.shap_explainer import (
    get_top_risk_factors
)

from services.intervention_engine import (
    generate_interventions
)
router = APIRouter()


@router.post("/predict-csv")
async def predict_csv(
    file: UploadFile = File(...)
):
    df = pd.read_csv(file.file)

    results = []

    for _, row in df.iterrows():

        student_id = row["student_id"]
        student_name = row["student_name"]

        student_data = row.drop(
            ["student_id", "student_name"]
        ).to_dict()

        processed_df = preprocess_student(
            student_data
        )

        prediction_result = predict_student(
            processed_df
        )

        top_factors = get_top_risk_factors(
        processed_df
        )

        interventions = generate_interventions(
        top_factors
        )

        results.append(
        {
            "student_id": student_id,
            "student_name": student_name,

            **prediction_result,

            "top_factors": top_factors,

            "interventions": interventions
        }
        )

    return {
        "total_students": len(results),
        "results": results
    }