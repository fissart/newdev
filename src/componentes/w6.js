import React from "react";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
import { useRef, useEffect } from 'react';
import ReportTemplate from '../ReportTemplate';
//https://www.nutrient.io/blog/how-to-convert-html-to-pdf-using-react/
//https://simonbengtsson.github.io/jsPDF-AutoTable/#content/
//http://raw.githack.com/MrRio/jsPDF/master/index.html
//https://github.com/simonbengtsson/jsPDF-AutoTable/blob/799cd737d7491155d0914e7b0dfb093976d16b21/examples/examples.js
const NoPage = () => {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      console.log(JSON.parse(localStorage.getItem("user")).name)
      console.log(JSON.parse(localStorage.getItem("user"))._id)
    }
    // get()
    // setFormData({ ...formData, rol:"3", name:"www", email:"www", foto:"www", password:"www" })
  }, []);


  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    });

    // Adding the fonts.
    doc.setFont('Inter-Regular', 'normal');

    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');

    var img = new Image()
    img.src = './Photosphere1.jpg'
    doc.addImage(img, 'jpg', 15, 40, 280, 180)
    doc.save("www.pdf");

    // doc.html(reportTemplateRef.current, {
    //   async callback(doc) {
    //     await doc.save('document');
    //   },
    // });
  };


  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const colstyle = {
    width: "30%"
  };
  const tableStyle = {
    width: "100%"
  };
  const Prints = () => (
    <div>
      <h3>Time & Materials Statement of Work (SOW)</h3>
      <h4>General Information</h4>
      <table id="tab_customers" className="table table-striped" style={tableStyle}>
        <colgroup>
          <col span="1" style={colstyle} />
          <col span="1" style={colstyle} />
        </colgroup>
        <thead>
          <tr className="warning">
            <th>SOW Creation Date</th>
            <th>SOW Start Date</th>
            <th>Project</th>
            <th>Last Updated</th>
            <th>SOW End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dec 13, 2017</td>
            <td>Jan 1, 2018</td>
            <td>NM Connect - NMETNMCM</td>
            <td>Dec 13, 2017</td>
            <td>Dec 31, 2018</td>
          </tr>
        </tbody>
      </table>
      <p>
        This is a Time and Materials Statement of Work between Northwestern Mutual
        Life Insurance Company and Infosys with all general terms and conditions
        as described in the current Master Agreement and its related documents
      </p>
    </div>
  );

  const print = () => {
    const string = renderToString(<Prints />);
    const pdf = new jsPDF("p", "mm", "a4");
    // const columns = [
    //   "SOW Creation Date",
    //   "SOW Start Date",
    //   "Project",
    //   "Last Updated",
    //   "SOW End Date"
    // ];
    // var rows = [
    //   [
    //     "Dec 13, 2017",
    //     "Jan 1, 2018",
    //     "ABC Connect - ABCXYZ",
    //     "Dec 13, 2017",
    //     "Dec 31, 2018"
    //   ]
    // ];
    pdf.fromHTML(string,
      15,
      15,
      {
        'width': 180
      });
    pdf.save("pdf");
  };


  return <div style={styles}>
    {/* <Hello name="CodeSandbox" /> */}
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <button onClick={print}>print</button>
    <Prints />

    <button className="button" onClick={handleGeneratePdf}>
      Generate PDF
    </button>
    <div ref={reportTemplateRef}>
      <ReportTemplate />
    </div>
  </div>
}
export default NoPage;

