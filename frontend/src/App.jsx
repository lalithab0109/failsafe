import { useState } from "react";
import api from "./services/api";

import StudentForm from "./components/StudentForm";
import PredictionCard from "./components/PredictionCard";
import RiskFactorsCard from "./components/RiskFactorsCard";
import InterventionCard from "./components/InterventionCard";
import ClassAnalysis from "./components/ClassAnalysis";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("individual");

  const handlePrediction = async (formData) => {
    try {
      setLoading(true);

      const response = await api.post(
        "/predict",
        formData
      );

      setResult(response.data);

    } catch (error) {
      console.error(error);
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-8 bg-white rounded-xl shadow-md p-6">

          <h1 className="text-5xl font-extrabold text-blue-700">
            FAILSAFE
          </h1>

          <p className="text-lg text-gray-600 mt-2">
            AI-Powered Student Failure Prediction &
            Intervention Dashboard
          </p>

          <p className="text-sm text-gray-500 mt-3">
            Identify at-risk students early, understand
            contributing factors, and generate targeted
            intervention recommendations.
          </p>

          <div className="flex gap-3 mt-6">

            <button
              onClick={() => setMode("individual")}
              className={`px-5 py-2 rounded-xl font-medium transition-all ${
                mode === "individual"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 shadow-sm hover:shadow-md"
              }`}
            >
              👤 Individual Student
            </button>

            <button
              onClick={() => setMode("class")}
              className={`px-5 py-2 rounded-xl font-medium transition-all ${
                mode === "class"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 shadow-sm hover:shadow-md"
              }`}
            >
              📊 Class Analysis
            </button>

          </div>

        </div>

        {/* Individual Student Section */}

        <div
          style={{
            display: mode === "individual" ? "block" : "none",
          }}
        >
          <div>
            {/* Student Form */}

            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <StudentForm
                onPredict={handlePrediction}
                loading={loading}
              />
            </div>

            {/* Prediction Result */}

            <div className="bg-white p-6 rounded-xl shadow-md">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>

                  <p className="mt-4 text-gray-600 font-medium">
                    Analyzing student data...
                  </p>
                </div>
              ) : result ? (
                <PredictionCard result={result} />
              ) : (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="text-6xl mb-4">📊</div>

                  <h2 className="text-2xl font-bold">
                    Prediction Dashboard
                  </h2>

                  <p className="text-gray-500 mt-3 max-w-md">
                    Fill in the student information and click Predict
                    Student to generate risk analysis and intervention
                    recommendations.
                  </p>
                </div>
              )}
            </div>

            {/* Risk Factors + Interventions */}

            {result && !loading && (
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <RiskFactorsCard
                    factors={result.top_factors}
                  />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <InterventionCard
                    interventions={result.interventions}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Class Analysis Section */}

        <div
          style={{
            display: mode === "class" ? "block" : "none",
          }}
        >
          <ClassAnalysis />
        </div>

      </div>

    </div>
  );
}

export default App;