import { useState } from "react";

function StudentForm({ onPredict, loading }) {
  const [formData, setFormData] = useState({
    school: "GP",
    sex: "F",
    age: 17,
    address: "U",
    famsize: "GT3",
    Pstatus: "T",

    Medu: 4,
    Fedu: 4,

    Mjob: "teacher",
    Fjob: "services",

    reason: "course",
    guardian: "mother",

    traveltime: 1,
    studytime: 2,
    failures: 0,

    schoolsup: "no",
    famsup: "yes",
    paid: "no",
    activities: "yes",
    internet: "yes",
    romantic: "no",
    higher: "yes",

    famrel: 4,
    freetime: 3,
    goout: 3,

    Dalc: 1,
    Walc: 1,

    health: 5,
    absences: 2,

    G1: 13,
    G2: 14
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(formData);
  };
  const handleReset = () => {
    setFormData({
        school: "GP",
        sex: "F",
        age: 17,
        address: "U",
        famsize: "GT3",
        Pstatus: "T",

        Medu: 4,
        Fedu: 4,

        Mjob: "teacher",
        Fjob: "services",

        reason: "course",
        guardian: "mother",

        traveltime: 1,
        studytime: 2,
        failures: 0,

        schoolsup: "no",
        famsup: "yes",
        paid: "no",
        activities: "yes",
        internet: "yes",
        romantic: "no",
        higher: "yes",

        famrel: 4,
        freetime: 3,
        goout: 3,

        Dalc: 1,
        Walc: 1,

        health: 5,
        absences: 2,

        G1: 13,
        G2: 14
    });
    };

  return (
  <form
    onSubmit={handleSubmit}
    className="space-y-6"
  >
    <h2 className="text-2xl font-bold text-gray-800">
      Student Information
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Academic Performance */}

      <div className="bg-slate-50 rounded-xl p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">
          Academic Performance
        </h3>

        <div className="space-y-3">

          <div>
            <label className="block text-sm font-medium mb-1">
              G1
            </label>
            <input
              type="number"
              name="G1"
              value={formData.G1}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              G2
            </label>
            <input
              type="number"
              name="G2"
              value={formData.G2}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Absences
            </label>
            <input
              type="number"
              name="absences"
              value={formData.absences}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Study Time
            </label>
            <input
              type="number"
              name="studytime"
              value={formData.studytime}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Previous Failures
            </label>
            <input
              type="number"
              name="failures"
              value={formData.failures}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>
      </div>

      {/* Background */}

      <div className="bg-slate-50 rounded-xl p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">
          Background Information
        </h3>
        

        <div className="space-y-3">
            <div>
                <label className="block text-sm font-medium mb-1">
                    School
                </label>

                <select
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="GP">Gabriel Pereira</option>
                    <option value="MS">Mousinho da Silveira</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">
                    Gender
                </label>

                <select
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="F">Female</option>
                    <option value="M">Male</option>
                </select>
            </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Travel Time
            </label>
            <input
              type="number"
              name="traveltime"
              value={formData.traveltime}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Mother's Education
            </label>
            <select
                name="Medu"
                value={formData.Medu}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200"
                >
                <option value="0">0 - None</option>
                <option value="1">1 - Primary Education</option>
                <option value="2">2 - 5th to 9th Grade</option>
                <option value="3">3 - Secondary Education</option>
                <option value="4">4 - Higher Education</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Father's Education
            </label>
            <select
                name="Fedu"
                value={formData.Fedu}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200"
                >
                <option value="0">0 - None</option>
                <option value="1">1 - Primary Education</option>
                <option value="2">2 - 5th to 9th Grade</option>
                <option value="3">3 - Secondary Education</option>
                <option value="4">4 - Higher Education</option>
            </select>
          </div>

        </div>
      </div>

      {/* Lifestyle */}

      <div className="bg-slate-50 rounded-xl p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">
          Lifestyle Factors
        </h3>

        <div className="space-y-3">

          <div>
            <label className="block text-sm font-medium mb-1">
              Free Time
            </label>
            <input
              type="number"
              name="freetime"
              value={formData.freetime}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Social Activity
            </label>
            <input
              type="number"
              name="goout"
              value={formData.goout}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Health
            </label>
            <input
              type="number"
              name="health"
              value={formData.health}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Weekday Alcohol Consumption
            </label>
            <input
              type="number"
              name="Dalc"
              value={formData.Dalc}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Weekend Alcohol Consumption
            </label>
            <input
              type="number"
              name="Walc"
              value={formData.Walc}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-white shadow-sm border-0 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>
      </div>

      {/* Support */}

        <div className="bg-slate-50 rounded-xl p-5 shadow-sm">

        <h3 className="text-lg font-semibold text-blue-700 mb-4">
            Support Factors
        </h3>

        <div className="space-y-5">

            {/* Family Support */}

            <div className="flex items-center justify-between gap-4">

            <label className="font-medium flex-1">
                Family Support
            </label>

            <div className="flex gap-3">

                <button
                type="button"
                onClick={() =>
                    setFormData({
                    ...formData,
                    famsup: "yes"
                    })
                }
                className={`px-4 py-2 rounded-lg transition ${
                    formData.famsup === "yes"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                >
                Yes
                </button>

                <button
                type="button"
                onClick={() =>
                    setFormData({
                    ...formData,
                    famsup: "no"
                    })
                }
                className={`px-4 py-2 rounded-lg transition ${
                    formData.famsup === "no"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                >
                No
                </button>

            </div>

            </div>

            {/* Internet Access */}

            <div className="flex items-center justify-between gap-4">

            <label className="font-medium flex-1">
                Internet Access
            </label>

            <div className="flex gap-3">

                <button
                type="button"
                onClick={() =>
                    setFormData({
                    ...formData,
                    internet: "yes"
                    })
                }
                className={`px-4 py-2 rounded-lg transition ${
                    formData.internet === "yes"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                >
                Yes
                </button>

                <button
                type="button"
                onClick={() =>
                    setFormData({
                    ...formData,
                    internet: "no"
                    })
                }
                className={`px-4 py-2 rounded-lg transition ${
                    formData.internet === "no"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                >
                No
                </button>

            </div>

            </div>

            {/* School Support */}

            <div className="flex items-center justify-between gap-4">

            <label className="font-medium flex-1">
                School Support
            </label>

            <div className="flex gap-3">

                <button
                type="button"
                onClick={() =>
                    setFormData({
                    ...formData,
                    schoolsup: "yes"
                    })
                }
                className={`px-4 py-2 rounded-lg transition ${
                    formData.schoolsup === "yes"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                >
                Yes
                </button>

                <button
                type="button"
                onClick={() =>
                    setFormData({
                    ...formData,
                    schoolsup: "no"
                    })
                }
                className={`px-4 py-2 rounded-lg transition ${
                    formData.schoolsup === "no"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                >
                No
                </button>

            </div>

            </div>

            {/* Higher Education Goal */}

            <div className="flex items-center justify-between gap-4">

            <label className="font-medium flex-1">
                Higher Education Goal
            </label>

            <div className="flex gap-3">

                <button
                type="button"
                onClick={() =>
                    setFormData({
                    ...formData,
                    higher: "yes"
                    })
                }
                className={`px-4 py-2 rounded-lg transition ${
                    formData.higher === "yes"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                >
                Yes
                </button>

                <button
                type="button"
                onClick={() =>
                    setFormData({
                    ...formData,
                    higher: "no"
                    })
                }
                className={`px-4 py-2 rounded-lg transition ${
                    formData.higher === "no"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                >
                No
                </button>

            </div>

            </div>

            {/* Romantic Relationship */}

            <div className="flex items-center justify-between gap-4">

            <label className="font-medium flex-1">
                Romantic Relationship
            </label>

            <div className="flex gap-3">

                <button
                type="button"
                onClick={() =>
                    setFormData({
                    ...formData,
                    romantic: "yes"
                    })
                }
                className={`px-4 py-2 rounded-lg transition ${
                    formData.romantic === "yes"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                >
                Yes
                </button>

                <button
                type="button"
                onClick={() =>
                    setFormData({
                    ...formData,
                    romantic: "no"
                    })
                }
                className={`px-4 py-2 rounded-lg transition ${
                    formData.romantic === "no"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                >
                No
                </button>

            </div>

            </div>

        </div>

        </div>

    </div>

    <div className="flex gap-4">

    <button
        type="submit"
        disabled={loading}
        className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
    >
        {loading ? "Analyzing..." : "Predict Student"}
    </button>

    <button
        type="button"
        onClick={handleReset}
        className="px-6 py-3 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 transition"
    >
        Reset
    </button>

    </div>

    

  </form>
);
}

export default StudentForm;