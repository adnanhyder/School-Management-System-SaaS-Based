import React from 'react';
import {printArea} from "@/functions";
const PrintButton = ({ schoolName, id , printFlag }) => {
  const handlePrint = () => {
    printArea(schoolName , id);
  }
  return (
    <button className="bx-pull-right bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600" onClick={handlePrint}>Print</button>
  );
};

export default PrintButton;
