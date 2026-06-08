# services/intervention_engine.py

INTERVENTIONS = {
    "G1": {
        "title": "Academic Support",
        "recommendation": (
            "Provide remedial classes and additional academic support "
            "to strengthen foundational concepts."
        )
    },

    "G2": {
        "title": "Targeted Tutoring",
        "recommendation": (
            "Enroll the student in subject-specific tutoring sessions "
            "and monitor academic progress weekly."
        )
    },

    "absences": {
        "title": "Attendance Counselling",
        "recommendation": (
            "Schedule attendance counselling and identify reasons for "
            "frequent absences."
        )
    },

    "studytime": {
        "title": "Study Plan Improvement",
        "recommendation": (
            "Create a structured study schedule and encourage regular "
            "study habits."
        )
    },

    "failures": {
        "title": "Academic Mentoring",
        "recommendation": (
            "Assign an academic mentor and provide additional support "
            "to address repeated failures."
        )
    },

    "traveltime": {
        "title": "Travel Burden Support",
        "recommendation": (
            "Consider flexible learning resources and support to reduce "
            "the impact of long travel times."
        )
    },

    "Walc": {
        "title": "Lifestyle Counselling",
        "recommendation": (
            "Provide awareness and counselling regarding excessive "
            "weekend alcohol consumption."
        )
    },

    "Dalc": {
        "title": "Wellness Intervention",
        "recommendation": (
            "Recommend counselling and wellness programs to address "
            "weekday alcohol consumption."
        )
    },

    "goout": {
        "title": "Time Management Support",
        "recommendation": (
            "Provide guidance on balancing social activities with "
            "academic responsibilities."
        )
    },

    "freetime": {
        "title": "Productive Time Utilization",
        "recommendation": (
            "Encourage productive use of free time through study groups "
            "and academic activities."
        )
    },

    "health": {
        "title": "Health Support",
        "recommendation": (
            "Refer the student to appropriate health and wellbeing "
            "services if necessary."
        )
    },

    "famrel": {
        "title": "Family Support Review",
        "recommendation": (
            "Explore family-related challenges and provide counselling "
            "or support services where appropriate."
        )
    },

    "Medu": {
        "title": "Parental Engagement",
        "recommendation": (
            "Increase communication with parents and provide guidance "
            "on supporting the student's academic journey."
        )
    },

    "Fedu": {
        "title": "Parental Engagement",
        "recommendation": (
            "Increase communication with parents and provide guidance "
            "on supporting the student's academic journey."
        )
    },

    "famsup_yes": {
        "title": "Family Support Enhancement",
        "recommendation": (
            "Encourage stronger family involvement in academic "
            "planning and support."
        )
    },

    "higher_yes": {
        "title": "Career Guidance",
        "recommendation": (
            "Provide career counselling and encourage the student "
            "to set long-term educational goals."
        )
    },

    "romantic_yes": {
        "title": "Student Counselling",
        "recommendation": (
            "Provide counselling support to help maintain a healthy "
            "balance between personal and academic commitments."
        )
    }
}


def generate_interventions(top_risk_factors: list) -> list:
    """
    Generate interventions from SHAP risk factors.
    """

    interventions = []

    added_titles = set()

    for factor in top_risk_factors:

        feature = factor["feature"]

        if feature not in INTERVENTIONS:
            continue

        intervention = INTERVENTIONS[feature]

        # Prevent duplicates
        if intervention["title"] in added_titles:
            continue

        interventions.append(
            {
                "title": intervention["title"],
                "recommendation": intervention["recommendation"],
                "severity": factor.get(
                    "severity",
                    "Low"
                ),
                "reason": factor.get(
                    "reason",
                    ""
                )
            }
        )

        added_titles.add(
            intervention["title"]
        )

    return interventions