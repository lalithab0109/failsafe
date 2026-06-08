# utils/preprocessing.py

from pathlib import Path

import joblib
import pandas as pd


# backend directory
BASE_DIR = Path(__file__).resolve().parent.parent

FEATURE_COLUMNS_PATH = BASE_DIR / "models" / "feature_columns.pkl"

# Load once when the application starts
FEATURE_COLUMNS = joblib.load(FEATURE_COLUMNS_PATH)


def preprocess_student(student_data: dict) -> pd.DataFrame:
    """
    Convert incoming student data into the exact format
    expected by the trained XGBoost model.

    Parameters
    ----------
    student_data : dict
        Student details received from frontend/API

    Returns
    -------
    pd.DataFrame
        Processed dataframe ready for prediction
    """

    # Create single-row dataframe
    df = pd.DataFrame([student_data])

    print(df.columns.tolist())

    # Apply one-hot encoding
    df = pd.get_dummies(df)

    

    # Align with training columns
    df = df.reindex(
        columns=FEATURE_COLUMNS,
        fill_value=0
    )

    return df