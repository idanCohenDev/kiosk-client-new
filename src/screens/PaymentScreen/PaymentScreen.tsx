import React from "react";
import "./PaymentScreen.css";
import Button from "lib/button";

const PaymentScreen = () => {
  return (
    <div className="main-container">
      <p className="title">נא להעביר כרטיס</p>
      <div className="total-container">
        <p className="total-container-text">{`סה״כ לתשלום ${"50₪"}`}</p>
      </div>
      <div className="options-container">
        <p className="options-title">לנוחיותך 3 אפשרויות תשלום</p>
        <div className="credit-options-container">
          <div className="option-container">
            <img
              src={`/credit-option.svg`}
              className="option-icon"
              alt="credit-companies"
            />
            <p className="option-text">הכנס את הכרטיס</p>
          </div>
          <div className="option-container">
            <img
              src={`/credit-nfc-option.svg`}
              className="option-icon nfc-option"
              alt="credit-companies"
            />
            <p className="option-text">הצמד את הכרטיס</p>
          </div>
        </div>
        <div>
          <div className="option-container">
            <img
              src={`/phone-option.svg`}
              className="option-icon"
              alt="credit-companies"
            />
            <p className="option-text">הצמד את הנייד</p>
          </div>
        </div>
      </div>
      <p className="options-title bottom-text">
        לאחר ההודעה על אישור התשלום המתן לסום העסקה וקבלת השטרות
      </p>
      <div className="payment-bottom-container">
        <img src={`/phone-watch.svg`} alt={"phone-watch"} />
        <div>
          <p className="options-title promotion-text">
            משלמים באופן בטוח, בקלות ובמהירות עם הנייד
          </p>
          <img src={`/credit-companies.svg`} alt="credit-companies" />
        </div>
      </div>
      <div className="button-container">
        <Button style={{ border: "none" }} onClick={() => {}} type="outline">
          <img
            src={"/chevron-right.svg"}
            className="button-icon"
            alt="right arrow"
          />
          חזרה
        </Button>
      </div>
    </div>
  );
};

export default PaymentScreen;
