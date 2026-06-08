function InterventionCard({ interventions }) {
    if (!interventions || interventions.length === 0) {
    return (
        <div>
        <h2 className="text-2xl font-bold mb-6">
            Recommended Interventions
        </h2>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">

            <h3 className="text-lg font-semibold text-blue-700">
            🎉 No Intervention Required
            </h3>

            <p className="text-gray-600 mt-2">
            Based on the current prediction and risk
            analysis, no targeted intervention is
            recommended at this time.
            </p>

        </div>
        </div>
    );
    }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Recommended Interventions
      </h2>

      <div className="space-y-4">
        {interventions.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 bg-slate-50"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.severity === "High"
                    ? "bg-red-100 text-red-700"
                    : item.severity === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {item.severity}
              </span>
            </div>

            <p className="text-gray-700 mb-3">
              <strong>Reason:</strong> {item.reason}
            </p>

            <div className="bg-white rounded-lg p-3 border">
              <strong>Recommendation:</strong>
              <p className="mt-1">
                {item.recommendation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterventionCard;