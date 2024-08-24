import React from 'react';

const PrintButton = ({schoolName, id}) => {
  const printArea = () => {
    const printContent = document.getElementById('print-section').innerHTML;
    const newWindow = window.open('', '', 'height=800,width=1024');
    const pageTitle = `${id} - ${schoolName}`;
    const style = `
    .school-logo {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}

.header-info {

}

.header-info h1 {
    margin: 0px auto;
    font-size: 50px;
}

.header-info p {
    margin: 5px 0;
    display: inline;
}

.receipt-details {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    color: blue;
}

.receipt-details p span {
    color: black;
}

.receipt-info,
.student-info {
    width: 48%;
}

.profile-pic img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.receipt-info p,
.student-info p {
    margin: 5px 0;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table th,
table td {
    border: 1px solid #AEA1EA;
    padding: 8px;
    text-align: left;
}



#t-rup {
    color: brown;
}

#w-rup {
    color: rgb(77, 165, 42);
}

.fee-summary {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.summary-left p,
.payment-info p,
.received-by p {
    margin: 5px 0;
}
.recipt-fee header{
    text-align: center;
}
.w250{
    width: 100px !important;
    height: 100px !important;
}
.bx-pull-left.w-75 {
text-align: center;
}
.clearfix {
clear: both;
}
.bx-pull-left {
float: left;
margin-right: 0.3em !important;
}
    `;
    newWindow.document.write('<html><head><title>'+ pageTitle +'</title>');
    newWindow.document.write('<style>'+ style+ 'body { font-family: Arial, sans-serif;  }</style>');
    newWindow.document.write('</head><body >');
    newWindow.document.write(printContent);
    newWindow.document.write('</body></html>');

    newWindow.document.close();
    newWindow.focus(); // Focus on the new window
    newWindow.print();
  };

  return (
    <button onClick={printArea}>Print</button>
  );
};

export default PrintButton;
