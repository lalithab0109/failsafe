function RiskFactorsCard({ factors }) {
    if (!factors || factors.length === 0) {
    return (
        <div>
        <h2 className="text-2xl font-bold mb-6">
            Top Risk Factors
        </h2>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">

            <h3 className="text-lg font-semibold text-green-700">
            ✅ No Significant Risk Factors Detected
            </h3>

            <p className="text-gray-600 mt-2">
            The student's current profile does not
            contain any major indicators associated
            with academic failure.
            </p>

        </div>
        </div>
    );
    }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Top Risk Factors
      </h2>

      <div className="space-y-4">
        {factors.map((factor, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 bg-slate-50"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">
                {factor.label}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  factor.severity === "High"
                    ? "bg-red-100 text-red-700"
                    : factor.severity === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {factor.severity}
              </span>
            </div>

            <p className="text-gray-700 mb-2">
              {factor.reason}
            </p>

            <p className="text-sm text-gray-500">
              Impact Score: {factor.shap_value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RiskFactorsCard;