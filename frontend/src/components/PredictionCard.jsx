function PredictionCard({ result }) {
  const getRiskStyles = () => {
    switch (result.risk_level) {
      case "High":
        return {
          bg: "bg-red-50",
          text: "text-red-700",
          icon: "🔴"
        };

      case "Medium":
        return {
          bg: "bg-yellow-50",
          text: "text-yellow-700",
          icon: "🟡"
        };

      default:
        return {
          bg: "bg-green-50",
          text: "text-green-700",
          icon: "🟢"
        };
    }
  };

  const risk = getRiskStyles();

  const outcomeStyle =
    result.prediction === "Fail"
      ? {
          bg: "bg-red-50",
          text: "text-red-700",
          icon: "❌"
        }
      : {
          bg: "bg-green-50",
          text: "text-green-700",
          icon: "✅"
        };

  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Prediction Result
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Outcome */}

        <div
          className={`${outcomeStyle.bg} rounded-xl p-6 text-center shadow-sm`}
        >
          <p className="text-sm text-gray-500 mb-2">
            Predicted Outcome
          </p>

          <h3
            className={`text-2xl font-bold ${outcomeStyle.text}`}
            >
            {outcomeStyle.icon} {result.prediction}
          </h3>
        </div>

        {/* Risk Level */}

        <div
          className={`${risk.bg} rounded-xl p-6 text-center shadow-sm`}
        >
          <p className="text-sm text-gray-500 mb-2">
            Risk Level
          </p>

          <h3
            className={`text-2xl font-bold ${risk.text}`}
            >
            {risk.icon} {result.risk_level}
          </h3>
        </div>

        {/* Probability */}

        <div className="bg-blue-50 rounded-xl p-6 text-center shadow-sm">
            <p className="text-sm text-gray-500 mb-2">
            Failure Probability
            </p>
          <h3 className="text-2xl font-bold text-blue-700">
            📊 {result.failure_probability}%
          </h3>

        </div>

      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">

        <div className="flex flex-wrap gap-2">

            <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">
            XGBoost
            </span>

            <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">
            SHAP Explainability
            </span>

            <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">
            Binary Classification
            </span>

        </div>`

      </div>

    </div>
  );
}

export default PredictionCard;