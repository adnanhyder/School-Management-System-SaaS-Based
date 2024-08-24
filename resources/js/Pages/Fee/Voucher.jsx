import React, { forwardRef } from 'react';
import { ucfirst } from "@/functions";
import PrintButton from "@/Components/PrintButton";

const Voucher = forwardRef(({ auth, item, additional, printBtn }, ref) => {
  const fee = item;
  const school = auth.default;
  const titleOfPrint = `${ucfirst(fee.student.name)} - ${ucfirst(fee.student.roll_number)} - ${ucfirst(fee.classes.name)} - ${ucfirst(fee.classes.section)}`;

  return (
    <>
      <div className="container recipt-fee" id="print-section" ref={ref}>
        <header>
          <div className="header-info">
            <div className="bx-pull-left">
              {school.image && (
                <img src={`/storage/${school.image}`} className="w-64 school-logo" />
              )}
            </div>
            <div className="bx-pull-left w-75">
              <h1 className="text-uppercase">{ucfirst(school.name)}</h1>
              <p className="text-uppercase">{school.address}</p>
            </div>
            <div className='clearfix'></div>
          </div>
        </header>

        <section className="receipt-details">
          <div className="receipt-info">
            <p>Receipt No: <span>{fee.id}</span></p>
            <p>Date: <span>{new Date(fee.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span></p>
            <p>Class: <span>{ucfirst(fee.classes.name)}</span></p>
            <p>Section: <span>{ucfirst(fee.classes.section)}</span></p>
            <p>Session: <span>{ucfirst(fee.sessions.name)}</span></p>
          </div>
          <div className="student-info">
            <p>Name: <span>{ucfirst(fee.student.name)}</span></p>
            <p>Parent Name: <span>{ucfirst(fee.student.parent_name)}</span></p>
            <p>Mobile: <span>{ucfirst(fee.student.phone)}</span></p>
            <p>Fee Month: <span>{new Date(0, fee.month - 1).toLocaleString('en-US', { month: 'long' })}</span></p>
          </div>
          <div className="profile-pic">
            {fee.student.profile_picture && (
              <img src={`/storage/${fee.student.profile_picture}`} className="w250" />
            )}
          </div>
        </section>
        <table>
          <thead>
          <tr>
            <th>S.No.</th>
            <th>PARTICULARS</th>
            <th>Amount</th>
          </tr>
          </thead>
          <tbody>
          <tr key="fixed">
            <td>1</td>
            <td>Academic/Tuition Fee</td>
            <td>{fee.student.fee_amount}</td>
          </tr>
          {additional.map((fee, index) => (
            <tr key={index + 1}>
              <td>{index + 2}</td>
              <td>{fee.name}</td>
              <td>{fee.amount}</td>
            </tr>
          ))}
          <tr key="total">
            <td></td>
            <td><b>Total</b></td>
            <td><b>{fee.amount}</b></td>
          </tr>
          </tbody>
        </table>
        <div className="fee-summary">
          <div className="summary-left">
            <p>Total Fee: <span>{fee.amount}</span></p>
          </div>
          <div className="summary-right">
            <div className="payment-info">
              <p>Payment Mode: <span>Cash</span></p>
            </div>
            <div className="received-by">
              <p>Status : <span>{ucfirst(fee.status)} </span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="bx-pull-right">
        {printBtn && (
          <PrintButton schoolName={ucfirst(school.name)} id={titleOfPrint} />
        )}
      </div>
    </>
  );
});

export default Voucher;
