import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { LuSearch } from "react-icons/lu";
import * as XLSX from "xlsx";
import LazyImage from "../components/LazyImage";

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
      <div className="w-full h-fit max-w-[1700px] px-16 max-md:px-5 mx-auto pb-[80px]">
        <Navbar />
        <div className="w-full flex pt-24 pb-16 justify-between">
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
        <div className="p-5 bg-white">
          {graduates.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {graduates.map((graduate, index) => (
                <div className="flex flex-col w-full gap-5">
                <div key={index} className="w-full flex items-center justify-between gap-6 p-5 mb-0 hover:text-main-color cursor-pointer transition rounded-xl hover:bg-[#ebebeb69]">
                  <div className="w-[100px] h-[100px] aspect-square overflow-hidden rounded-full ">
                    <LazyImage
                      image={`/Graduates/profiles/${graduate["Profile Image"]}`}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <h1 className="text-2xl font-medium">{graduate["Full Names"]}</h1>
                    <h1 className="text-lg font-normal text-[#626262] flex items-center gap-3">
                        <span>{graduate["Position"]}</span>
                        |
                        <span>{graduate["Experience"]}</span>
                        |
                        <span>Available: {graduate["Available"]}</span>
                    </h1>
                  </div>
                  <button className="h-[45px] px-5 capitalize bg-main-color text-white font-medium rounded-full">view profile</button>
                </div>
                <div className="w-full h-[1px] bg-[#ebebeb]"></div>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default HireGraduate;
