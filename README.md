# 🎓 FAILSAFE

### AI-Powered Student Failure Prediction & Early Intervention System

FAILSAFE is an intelligent academic early-warning platform that helps educational institutions identify at-risk students before final examinations. Using Machine Learning and Explainable AI, the system predicts failure risk, explains the factors influencing each prediction, and generates personalized intervention strategies for faculty members.

---

## 🚀 Key Highlights

✅ Predicts academically at-risk students early

✅ Built using XGBoost with 93.81% accuracy

✅ Transparent predictions powered by SHAP Explainable AI

✅ Generates personalized intervention recommendations

✅ Supports both individual student analysis and class-level analysis

✅ Interactive dashboard built using React and FastAPI

---

## 📖 Project Motivation

Traditional academic monitoring systems often identify struggling students only after final examination results are released. By that stage, opportunities for meaningful intervention are limited.

FAILSAFE was developed to shift academic support from a reactive process to a proactive one by enabling faculty to:

* Detect students likely to fail
* Understand why they are struggling
* Apply targeted interventions
* Monitor class-wide academic risk trends

---

## 🏗️ System Architecture

```text
Student Data
      │
      ▼
Data Preprocessing
      │
      ▼
XGBoost Prediction Model
      │
      ▼
SHAP Explainability Layer
      │
      ▼
Risk Factor Identification
      │
      ▼
Intervention Recommendation Engine
      │
      ▼
Faculty Dashboard
```

---

## ✨ Features

### 👤 Individual Student Analysis

Faculty can manually enter student information and instantly receive:

* Failure risk prediction
* Risk probability score
* Risk category assessment
* Top contributing risk factors
* Personalized intervention recommendations

---

### 🔍 Explainable AI (SHAP)

Rather than producing a simple prediction, FAILSAFE explains the reasoning behind each decision.

The system identifies influential factors such as:

* Low assessment scores
* Poor attendance
* Previous academic failures
* Insufficient study time
* Limited educational support

Each factor is ranked based on its contribution to the predicted risk.

---

### 💡 Personalized Intervention Engine

Based on identified risk factors, the platform automatically recommends actions such as:

* Academic mentoring
* Additional tutoring sessions
* Attendance monitoring
* Parent engagement
* Study schedule adjustments
* Counseling referrals

---

### 📊 Class Analysis Dashboard

Faculty can upload an entire class dataset in CSV format to:

* Analyze multiple students simultaneously
* Identify high-risk students
* View risk distribution charts
* Understand overall class performance trends

---

## 🤖 Machine Learning Model

### Dataset

**UCI Student Performance Dataset**

The Mathematics and Portuguese student datasets were merged to create a comprehensive dataset containing academic, demographic, behavioural, and support-related information.

### Target Definition

A student is classified as **At Risk** if:

```text
Final Grade (G3) < 10
```

### Model Used

* XGBoost Classifier

### Input Features

Key features include:

* G1 (First Assessment Grade)
* G2 (Second Assessment Grade)
* Study Time
* Attendance
* Previous Failures
* Family Support
* Internet Access
* Travel Time
* Alcohol Consumption
* Social Activity
* Educational Background

and other behavioural and academic indicators.

---

## 📈 Model Performance

| Metric    | Score  |
| --------- | ------ |
| Accuracy  | 93.81% |
| Precision | 89%    |
| Recall    | 83%    |
| F1 Score  | 86%    |

### Confusion Matrix

|                | Predicted Safe | Predicted At Risk |
| -------------- | -------------- | ----------------- |
| Actual Safe    | 158            | 5                 |
| Actual At Risk | 8              | 39                |

The model demonstrates strong predictive performance while maintaining reliable identification of at-risk students.

---

## 🧠 Explainability Strategy

FAILSAFE combines:

### 1. SHAP Explainability

SHAP values measure the contribution of each feature toward a prediction.

### 2. Educational Risk Rules

Domain-specific thresholds are applied to highlight only meaningful academic concerns.

Examples:

* G1 < 10
* G2 < 10
* Absences ≥ 8
* Previous Failures > 0
* Study Time ≤ 2

This hybrid approach improves interpretability and ensures recommendations remain actionable for faculty members.

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios

### Backend

* FastAPI
* Python

### Machine Learning

* XGBoost
* Scikit-Learn
* SHAP

### Data Processing

* Pandas
* NumPy

### Visualization

* Matplotlib
* SHAP

---

## 📂 Project Structure

```text
FAILSAFE-PROJECT/

backend/
├── models/
├── routes/
├── schemas/
├── services/
│   ├── predictor.py
│   ├── shap_explainer.py
│   └── intervention_engine.py
├── utils/
├── database.py
└── main.py

frontend/
├── public/
├── src/
│   ├── components/
│   ├── services/
│   └── App.jsx
├── package.json
└── vite.config.js
```

---

## ⚙️ Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔮 Future Enhancements

* Faculty authentication system
* Historical student tracking
* Intervention effectiveness monitoring
* Real-time academic alerts
* Institution-wide analytics dashboard

---

## 👨‍💻 Academic Project

FAILSAFE demonstrates the integration of Machine Learning, Explainable AI, and Modern Web Technologies to support proactive academic intervention and student success.
