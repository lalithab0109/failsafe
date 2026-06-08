from pathlib import Path

import joblib
import shap
import pandas as pd


BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = BASE_DIR / "models" / "failsafe_model.pkl"

# Load model once at startup
model = joblib.load(MODEL_PATH)

# Create SHAP explainer
explainer = shap.TreeExplainer(model)


RISK_RULES = {
    "G1": lambda x: x < 10,
    "G2": lambda x: x < 10,
    "absences": lambda x: x >= 8,
    "studytime": lambda x: x <= 2,
    "failures": lambda x: x > 0,
    "traveltime": lambda x: x >= 3,
    "Walc": lambda x: x >= 4,
    "Dalc": lambda x: x >= 3,
    "goout": lambda x: x >= 4,
    "freetime": lambda x: x >= 4,
    "health": lambda x: x <= 2,
    "famrel": lambda x: x <= 2,
    "Medu": lambda x: x <= 3,
    "Fedu": lambda x: x <= 3,
    "famsup_yes": lambda x: x == 0,
    "higher_yes": lambda x: x == 0,
    "romantic_yes": lambda x: x == 1,
}


FEATURE_REASONS = {
    "G1": "First period grade is below the passing threshold.",
    "G2": "Second period grade is below the passing threshold.",
    "absences": "Student has a high number of absences.",
    "studytime": "Student spends limited time studying.",
    "failures": "Student has previous academic failures.",
    "traveltime": "Long travel time may affect academic performance.",
    "Walc": "High weekend alcohol consumption.",
    "Dalc": "High weekday alcohol consumption.",
    "goout": "Frequent social outings may reduce study time.",
    "freetime": "Excessive free time may indicate weak study habits.",
    "health": "Poor health may be affecting academic performance.",
    "famrel": "Weak family relationships may affect support systems.",
    "Medu": "Mother's education level may limit academic support.",
    "Fedu": "Father's education level may limit academic support.",
    "famsup_yes": "Student lacks family educational support.",
    "higher_yes": "Student does not plan to pursue higher education.",
    "romantic_yes": "Romantic relationship may be affecting academics."
}

FEATURE_LABELS = {
    "G1": "First Assessment Performance",
    "G2": "Second Assessment Performance",
    "absences": "Student Attendance",
    "studytime": "Study Time",
    "failures": "Previous Academic Failures",
    "traveltime": "Travel Time to School",
    "Walc": "Weekend Alcohol Consumption",
    "Dalc": "Weekday Alcohol Consumption",
    "goout": "Social Activity Level",
    "freetime": "Free Time Usage",
    "health": "Health Status",
    "famrel": "Family Relationship Quality",
    "Medu": "Mother's Education Level",
    "Fedu": "Father's Education Level",
    "famsup_yes": "Family Academic Support",
    "higher_yes": "Higher Education Aspirations",
    "romantic_yes": "Personal Relationship Impact"
}


def get_severity(shap_value: float) -> str:
    """
    Convert SHAP impact into severity level.
    """

    shap_value = abs(shap_value)

    if shap_value >= 0.15:
        return "High"

    if shap_value >= 0.05:
        return "Medium"

    return "Low"


def get_top_risk_factors(
    processed_df: pd.DataFrame,
    top_n: int = 5
) -> list:
    """
    Returns top risk factors based on:
    1. Risk rule satisfied
    2. Positive SHAP contribution
    3. Sorted by SHAP impact
    """

    shap_values = explainer.shap_values(processed_df)

    feature_names = processed_df.columns.tolist()

    shap_map = dict(
        zip(
            feature_names,
            shap_values[0]
        )
    )

    risk_factors = []

    for feature, rule in RISK_RULES.items():

        if feature not in processed_df.columns:
            continue

        value = processed_df.iloc[0][feature]

        shap_value = shap_map.get(feature, 0)

        try:

            if rule(value) and shap_value > 0:

                clean_value = (
                    value.item()
                    if hasattr(value, "item")
                    else value
                )

                risk_factors.append(
                {
                    "feature": str(feature),
                    "label": FEATURE_LABELS.get(
                        feature,
                        feature
                    ),
                    "value": clean_value,
                    "reason": FEATURE_REASONS.get(
                        feature,
                        "Potential academic risk factor."
                    ),
                    "severity": get_severity(
                        float(shap_value)
                    ),
                    "shap_value": round(
                        float(shap_value),
                        4
                    )
                }
                )

        except Exception:
            continue

    risk_factors.sort(
        key=lambda x: x["shap_value"],
        reverse=True
    )

    return risk_factors[:top_n]