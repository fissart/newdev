import React from 'react';
// import ExcelJS from 'exceljs';
// import { saveAs } from 'file-saver';
import ExportToExcel from './calculadorajs';


const NoPage = () => {
  const data = [
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 1, name: 'Name 1', email: 'Name1@example.com', joinDate: '2023-01-15' },
    { id: 2, name: 'Name 2', email: 'Name2@example.com', joinDate: '2023-02-20' },
    // Add more data as needed
  ];

  return (
    <div>
      <h1>www</h1>
      <ExportToExcel data={data} fileName="Data_Report"/>
    </div>
  )

};

export default NoPage;

