import React, { useState, useRef } from "react";

const Form = () => {
  const [form, setForm] = useState({
    // start empty so students fill in their own data
    program: "",
    programOther: "",
    date: "",
    // teamSize controls how many student input blocks are shown (1..3)
    teamSize: 1,
    students: [
      { name: "", classNo: "", reg: "" },
      { name: "", classNo: "", reg: "" },
      { name: "", classNo: "", reg: "" },
    ],
    contactPhone: "",
    topic: "",
    organization: "",
    advisor: "",
    advisorOther: "",
  });

  const printRef = useRef(null);

  const handleChange = (key) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((s) => ({ ...s, [key]: value }));
  };

  const handleStudentChange = (index, field, value) => {
    setForm((s) => {
      const students = Array.isArray(s.students) ? [...s.students] : [];
      students[index] = { ...students[index], [field]: value };
      return { ...s, students };
    });
  };

  const handleTeamSizeChange = (n) => {
    const size = Math.max(1, Math.min(3, Number(n)));
    setForm((s) => ({ ...s, teamSize: size }));
  };

  const handlePrint = () => {
    if (!printRef.current) return;
    const content = printRef.current.innerHTML;

    // Copy existing stylesheet/style tags so print view matches the app's styling (Tailwind)
    const styles = Array.from(
      document.querySelectorAll('link[rel="stylesheet"], style'),
    )
      .map((node) => node.outerHTML)
      .join("\n");

    const printWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!printWindow) return;

    printWindow.document.open();
    printWindow.document.write(
      `<!doctype html><html><head><meta charset="utf-8"><title>Project Approval Sheet</title>${styles}</head><body>${content}</body></html>`,
    );
    printWindow.document.close();
    printWindow.focus();

    // Wait for styles to load before printing
    printWindow.onload = () => {
      try {
        printWindow.print();
      } catch (e) {
        printWindow.print();
      }
    };
  };

  // Download filled form as PDF using html2canvas + jsPDF
  const handleDownload = async () => {
    if (!printRef.current) return;
    try {
      const [html2canvasMod, jspdfMod] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const html2canvas = html2canvasMod.default || html2canvasMod;
      const jsPDF = jspdfMod.jsPDF || jspdfMod.default || jspdfMod;

      const element = printRef.current;
      // increase scale for better quality
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({ unit: "mm", format: "a4" });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("project-approval.pdf");
    } catch (err) {
      console.error("PDF download failed:", err);
      // fallback: open print dialog
      handlePrint();
    }
  };

  return (
    <div className="bg-gray-100 p-8 min-h-screen flex justify-center">
      <div className="bg-white w-full max-w-200 p-8 md:p-12 shadow border border-gray-200 text-gray-800 font-serif">
        {/* Actions */}
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={handlePrint}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Print
          </button>
          <button
            onClick={handleDownload}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save PDF
          </button>
        </div>

        {/* Printable area */}
        <div ref={printRef}>
          {/* Header Section */}
          <div className="text-center border-b-2 border-black pb-4 mb-6">
            <h2 className="text-xl font-bold uppercase">
              The University of Agriculture, Peshawar
            </h2>
            <h3 className="text-md font-semibold">
              KHYBER PAKHTUNKHWA PAKISTAN
            </h3>
            <p className="text-xs italic mt-1">
              Phone: +92-91-9221262 | Fax: +92-91-9221262
            </p>

            <div className="mt-4 border-2 border-black inline-block px-6 py-1">
              <h1 className="text-lg font-black tracking-widest uppercase">
                Project Approval Sheet
              </h1>
            </div>
          </div>

          {/* Top Info (Program, Team size & Date) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div className="flex items-center gap-4">
              <label className="font-bold">Program:</label>
              <select
                value={form.program}
                onChange={handleChange("program")}
                className="border-b border-black bg-transparent px-2 py-1"
              >
                <option value="">Select Program</option>
                <option value="BS(CS)">BS(CS)</option>
                <option value="BS(IT)">BS(IT)</option>
                <option value="Other">Other</option>
              </select>
              {form.program === "Other" && (
                <input
                  type="text"
                  placeholder="Specify program"
                  value={form.programOther}
                  onChange={handleChange("programOther")}
                  className="border-b border-black ml-2 px-1"
                />
              )}
            </div>
            <div className="flex items-center gap-4">
              <label className="font-bold">Team size:</label>
              <select
                value={form.teamSize}
                onChange={(e) => handleTeamSizeChange(e.target.value)}
                className="border-b border-black ml-2 bg-transparent"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>

              <label className="font-bold ml-4">Date:</label>
              <input
                type="date"
                value={form.date}
                onChange={handleChange("date")}
                className="border-b border-black ml-2"
              />
            </div>
          </div>

          {/* Student Details Section (dynamic based on teamSize) */}
          <div className="space-y-4">
            {form.students.slice(0, form.teamSize).map((stu, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 gap-2 items-center border-b border-dotted border-black pb-2"
              >
                <label className="col-span-3 font-bold">Student's Name:</label>
                <input
                  className="col-span-4 italic border-b border-transparent focus:border-black outline-none"
                  value={stu.name}
                  onChange={(e) =>
                    handleStudentChange(idx, "name", e.target.value)
                  }
                />
                <label className="col-span-2 font-bold text-right">
                  Class No:
                </label>
                <input
                  className="col-span-1 italic border-b border-transparent focus:border-black outline-none"
                  value={stu.classNo}
                  onChange={(e) =>
                    handleStudentChange(idx, "classNo", e.target.value)
                  }
                />
                <label className="col-span-1 font-bold text-right">Reg:</label>
                <input
                  className="col-span-1 italic text-xs border-b border-transparent focus:border-black outline-none"
                  value={stu.reg}
                  onChange={(e) =>
                    handleStudentChange(idx, "reg", e.target.value)
                  }
                />
                {/* phone moved to a single contactPhone field (below) */}
              </div>
            ))}

            <div className="flex items-start gap-4">
              <label className="font-bold min-w-15">Topic:</label>
              <textarea
                value={form.topic}
                onChange={handleChange("topic")}
                className="flex-1 border-b border-dotted border-black min-h-15 italic p-2"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="font-bold whitespace-nowrap">
                Organization/Place:
              </label>
              <input
                value={form.organization}
                onChange={handleChange("organization")}
                className="flex-1 border-b border-dotted border-black h-8"
              />
            </div>

            {/* Advisor selection */}
            <div className="flex items-center gap-4 mt-4">
              <label className="font-bold">Advisor:</label>
              <select
                value={form.advisor}
                onChange={handleChange("advisor")}
                className="border-b border-black bg-transparent px-2 py-1"
              >
                <option>Adnan Haroon</option>
                <option>Dr. Ali</option>
                <option>Prof. Sana</option>
                <option>Engr. Bilal</option>
                <option value="Other">Other</option>
              </select>
              {/* no inline echo here; advisor will appear in signature area only */}
              {form.advisor === "Other" && (
                <input
                  type="text"
                  placeholder="Specify advisor"
                  value={form.advisorOther}
                  onChange={handleChange("advisorOther")}
                  className="border-b border-black ml-2 px-1"
                />
              )}
            </div>

            {/* Single contact phone (one field for the whole submission) */}
            <div className="flex items-center gap-4 mt-4">
              <label className="font-bold">Contact Phone:</label>
              <input
                type="tel"
                placeholder="e.g. 0344-1234567"
                value={form.contactPhone}
                onChange={handleChange("contactPhone")}
                className="border-b border-black ml-2 px-1"
              />
            </div>
          </div>

          {/* Signature Section */}
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div className="pt-8 text-center">
              <div className="border-t border-black italic">
                Student's Signatures
              </div>
              <div className="text-sm mt-2">
                Cell No: {form.contactPhone || "___________"}
              </div>
            </div>
            <div className="pt-8 text-center">
              <div className="font-bold italic underline mb-2">
                {form.advisor
                  ? form.advisor === "Other"
                    ? form.advisorOther || "Advisor"
                    : form.advisor
                  : "Advisor"}
              </div>
              <div className="border-t border-black">Advisor's Name</div>
            </div>
          </div>

          {/* Office Use Box */}
          <div className="mt-6 border-2 border-black p-4 text-sm">
            <div className="text-center font-bold underline mb-4 italic">
              For Office Use Only
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Starting Date: _______________</span>
                <span>Date of Submission: _______________</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-b border-black h-8 flex items-end">
                  Advisor's Signature:
                </div>
                <div className="border-b border-black h-8 flex items-end">
                  Departmental Head:
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-b border-black h-8 flex items-end">
                  Member i Signature:
                </div>
                <div className="border-b border-black h-8 flex items-end">
                  Director's Signature:
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-[10px] text-center text-gray-500">
            Printed for University Academic Records © 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
