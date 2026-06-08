# services/predictor.py

from pathlib import Path

import joblib
import pandas as pd


BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = BASE_DIR / "models" / "failsafe_model.pkl"

# Load model once when FastAPI starts
model = joblib.load(MODEL_PATH)


def get_risk_level(probability: float) -> str:
    """
    Convert failure probability into a risk category.
    """

    if probability >= 0.80:
        return "High"

    elif probability >= 0.50:
        return "Medium"

    return "Low"


def predict_student(student_df: pd.DataFrame) -> dict:
    """
    Predict failure risk for a single student.

    Parameters
    ----------
    student_df : pd.DataFrame
        Preprocessed student dataframe

    Returns
    -------
    dict
        Prediction results
    """

    prediction = int(model.predict(student_df)[0])

    failure_probability = float(
        model.predict_proba(student_df)[0][1]
    )

    risk_level = get_risk_level(
        failure_probability
    )

    return {
        "prediction": "Fail" if prediction == 1 else "Pass",
        "failure_probability": round(
            failure_probability * 100,
            2
        ),
        "risk_level": risk_level
    }