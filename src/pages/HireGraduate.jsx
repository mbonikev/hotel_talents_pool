import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { LuSearch } from "react-icons/lu";
import * as XLSX from "xlsx";

function HireGraduate() {
  const [graduates, setGraduates] = useState([]);
  useEffect(() => {
    const fetchExcelData = async () => {
      try {
        const response = await fetch("/Graduates/list.xlsx");
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet);
          setGraduates(jsonData); // jsonData will be an array of objects
        };
        reader.readAsArrayBuffer(blob);
      } catch (error) {
        console.error("Error reading Excel file:", error);
      }
    };

    fetchExcelData();
  }, []);
  return (
    <div className="w-full">
      <div className="w-full h-fit max-w-[1700px] mx-auto pb-[80px]">
        <Navbar />
        <div className="w-full flex px-16 py-24 justify-between">
          <div className="w-fit h-fit flex flex-col items-start justify-center gap-2">
            <h1 className="text-5xl font-bold w-fit text-dark-text/90">
              Graduate List
            </h1>
          </div>
          <div className="flex items-center justify-start gap-2 border-b-[1px] border-[#b8b8b8]">
            <LuSearch className="text-xl text-[#626262]" />
            <input
              type="text"
              className="h-[30px] outline-none border-none bg-transparent text-base placeholder:text-[#626262] text-[#111111]"
              placeholder="search graduate..."
            />
          </div>
        </div>
        {/* graduate */}
        <div>
          {graduates.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {graduates.map((graduate, index) => (
                <li key={index}>
                  {graduate["Full Names"]}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default HireGraduate;
