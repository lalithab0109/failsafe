
import { useState } from "react";
import api from "../services/api";
import PredictionCard from "./PredictionCard";
import RiskFactorsCard from "./RiskFactorsCard";
import InterventionCard from "./InterventionCard";

function ClassAnalysis() {
    const [file, setFile] = useState(null);
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedStudent, setSelectedStudent] =
    useState(null);

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a CSV file");
            return;
        }

        const formData = new FormData();

        formData.append("file", file);

        try {
            setLoading(true);

            const response = await api.post(
            "/predict-csv",
            formData,
            {
                headers: {
                "Content-Type":
                    "multipart/form-data"
                }
            }
            );

            setResults(response.data);

            if (response.data.results.length > 0) {
            setSelectedStudent(
                response.data.results[0]
            );
            }

            console.log(response.data);

        } catch (error) {
        console.error("UPLOAD ERROR:", error);

        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
        }

        alert("Upload failed");
        } finally {
            setLoading(false);
        }
    };

    const highRisk =
    results?.results.filter(
        s => s.risk_level === "High"
    ).length || 0;

    const mediumRisk =
    results?.results.filter(
        s => s.risk_level === "Medium"
    ).length || 0;

    const lowRisk =
    results?.results.filter(
        s => s.risk_level === "Low"
    ).length || 0;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-2">
        Class Analysis
      </h2>

      <p className="text-gray-500 mb-6">
        Upload a CSV file containing student data
        to analyze an entire class.
      </p>

      <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 text-center">

        <div className="text-5xl mb-4">
          📊
        </div>

        <h3 className="text-lg font-semibold mb-2">
          Upload Student CSV
        </h3>

        <p className="text-gray-500 mb-4">
          Select a CSV file containing student records.
        </p>

        <input
            id="csv-upload"
            type="file"
            accept=".csv"
            onChange={(e) =>
                setFile(e.target.files[0])
            }
            className="hidden"
        />

        <div className="flex justify-center mt-4">
            <label
                htmlFor="csv-upload"
                className="flex items-center border border-slate-300 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition"
            >
                <span className="bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 transition">
                    Choose File
                </span>

                <span className="px-4 py-2 text-gray-600 min-w-[220px] text-left bg-white">
                    {file ? file.name : "No file chosen"}
                </span>
            </label>
        </div>
        <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
            >
            {loading
                ? "Analyzing..."
                : "Analyze Class"}
        </button>


      </div>

      {results && (

        <div className="mt-8">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="bg-blue-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                Total Students
                </p>

                <h3 className="text-3xl font-bold text-blue-700">
                {results.total_students}
                </h3>
            </div>

            <div className="bg-red-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                High Risk
                </p>

                <h3 className="text-3xl font-bold text-red-600">
                {highRisk}
                </h3>
            </div>

            <div className="bg-yellow-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                Medium Risk
                </p>

                <h3 className="text-3xl font-bold text-yellow-600">
                {mediumRisk}
                </h3>
            </div>

            <div className="bg-green-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                Low Risk
                </p>

                <h3 className="text-3xl font-bold text-green-600">
                {lowRisk}
                </h3>
            </div>

            </div>

            {results && (

            <div className="mt-6 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4">

                ✓ Successfully analyzed{" "}
                <strong>
                {results.total_students}
                </strong>{" "}
                students.

            </div>

            )}
            
            <div className="mt-8 bg-white rounded-xl shadow-md p-6">

            <h3 className="text-xl font-bold mb-4">
                Student Results
                <span className="text-gray-500 font-normal ml-2">
                    ({results.total_students} Students)
                </span>
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">

                <table className="w-full text-sm">

                <thead className="bg-slate-50">

                    <tr> 

                    <th className="text-left py-4 pl-8 pr-4 font-semibold text-slate-700">
                        ID
                    </th>

                    <th className="text-left py-4 px-4 font-semibold text-slate-700">
                        Name
                    </th>

                    <th className="text-left py-4 px-4 font-semibold text-slate-700">
                        Prediction
                    </th>

                    <th className="text-left py-4 px-4 font-semibold text-slate-700">
                        Risk
                    </th>

                    </tr>

                </thead>

                <tbody className="divide-y divide-slate-100">

                    {results.results.map((student) => (

                    <tr
                    key={student.student_id}
                    onClick={() =>
                        setSelectedStudent(student)
                    }
                    className={`cursor-pointer transition-all duration-200 hover:shadow-sm ${
                        selectedStudent?.student_id ===
                        student.student_id
                        ? "bg-blue-50 ring-1 ring-blue-200"

                        : student.risk_level === "High"
                        ? "bg-red-50 hover:bg-red-100"

                        : "hover:bg-slate-50"
                    }`}
                    >

                        <td className="py-4 pl-8 pr-4">
                        {student.student_id}
                        </td>

                        <td className="py-4 px-4">
                        {student.student_name}
                        </td>

                        <td className="py-4 px-4">
                            {student.prediction === "Pass" ? (

                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                ✅ Pass
                                </span>

                            ) : (

                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                                ❌ Fail
                                </span>

                            )}

                        </td>

                        <td className="py-4 px-4">

                        {student.risk_level === "High" && (
                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                            🔴 High
                            </span>
                        )}

                        {student.risk_level === "Medium" && (
                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                            🟡 Medium
                            </span>
                        )}

                        {student.risk_level === "Low" && (
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            🟢 Low
                            </span>
                        )}

                        </td>

                    </tr>

                    ))}

                </tbody>

                </table>

            </div>
            {selectedStudent && (

                <div className="mt-8">

                    <div className="bg-white rounded-xl shadow-md p-6 mb-6">

                    <h2 className="text-2xl font-bold mb-2">
                        {selectedStudent.student_name}
                    </h2>

                    <p className="text-gray-500">
                        Student ID: {selectedStudent.student_id}
                    </p>

                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 mb-6">

                    <PredictionCard
                        result={selectedStudent}
                    />

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="bg-white rounded-xl shadow-md p-6">

                        <RiskFactorsCard
                        factors={
                            selectedStudent.top_factors
                        }
                        />

                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">

                        <InterventionCard
                        interventions={
                            selectedStudent.interventions
                        }
                        />

                    </div>

                    </div>

                </div>

                )}

            </div>

        </div>

        )}
    </div>
  );
}

export default ClassAnalysis;