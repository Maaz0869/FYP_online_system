import React from "react";
// Replaced lucide-react icons with simple inline characters to avoid extra dependency

const Dashboard = () => {
  const applications = [
    {
      type: "Final Year Project Proposal",
      date: "12 Jan 2026",
      status: "Approved",
      statusColor: "text-green-600 bg-green-100",
    },
    {
      type: "Mentor Change Request",
      date: "10 Jan 2026",
      status: "Pending",
      statusColor: "text-yellow-600 bg-yellow-100",
    },
  ];

  return (
    // Page-level padding — top offset is provided by the StudentDash spacer
    <div className="min-h-screen bg-[#f8fafc] pb-12 p-6 md:p-12 font-sans text-[#002147]">
      <div className="max-w-6xl mx-auto">
        {/* --- Simple Welcome Message --- */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome <span className="text-blue-600">Maaz Khan!</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Here are your recent applications and their status.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mt-2 rounded-full"></div>
        </div>

        {/* --- Table Section --- */}
        <div className="bg-white rounded-4xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 bg-gray-50/30">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <span className="text-blue-600 text-xl" aria-hidden>
                📝
              </span>
              MY Application
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-[11px] uppercase tracking-[2px]">
                  <th className="px-4 md:px-8 py-5 font-bold">
                    Application Type
                  </th>
                  <th className="px-4 md:px-8 py-5 font-bold">Date</th>
                  <th className="px-4 md:px-8 py-5 font-bold">Status</th>
                  <th className="px-4 md:px-8 py-5 font-bold text-center">
                    Download Form
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {applications.map((app, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-50/20 transition-all"
                  >
                    <td className="px-4 md:px-8 py-6 font-semibold text-gray-700">
                      {app.type}
                    </td>
                    <td className="px-4 md:px-8 py-6 text-gray-500">
                      {app.date}
                    </td>
                    <td className="px-4 md:px-8 py-6">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-2 ${app.statusColor}`}
                      >
                        {app.status === "Approved" ? (
                          <span aria-hidden>✅</span>
                        ) : (
                          <span aria-hidden>⏳</span>
                        )}
                        {app.status}
                      </span>
                    </td>
                    <td className="px-4 md:px-8 py-6 text-center">
                      <button className="bg-white border border-gray-200 text-gray-600 hover:bg-[#002147] hover:text-white px-4 py-2 rounded-xl transition-all font-bold text-xs flex items-center gap-2 mx-auto">
                        <span aria-hidden>⬇️</span>
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
