import React from "react";
import "./complaint.css";
import OfficeBuilding from "../../assets/images/OfficeBuilding.svg";
import ClockOutline from "../../assets/images/ClockOutline.svg";
import Notifications from "../../assets/images/Notifications none.svg";
import Calender from "../../assets/images/Calendar.svg";
import BottomNav from "../BottomNav/BottomNav";

export const ComplaintProcess = ({ className }) => {
  return (
    <div className={`complaint-process ${className}`}>
      <div className="container-fluid">
        <div className="sub-headline">
          <h1 className="headline">What happens when I file a complaint?</h1>
        </div>
        <div className="process">
          <div className="option">
            <img className="img" alt="Office building" src={OfficeBuilding} />
            <p className="text-wrapper">
              If your complaint meets our complaint acceptance criteria, your
              complaint will be sent to the business within approximately two
              business days.
            </p>
          </div>
          <div className="option">
            <img className="img" alt="Office building" src={OfficeBuilding} />
            <p className="text-wrapper">
              If your complaint&nbsp;&nbsp;meets our&nbsp;&nbsp;acceptance
              criteria, your complaint will be sent to the business within
              approximately two business days.
            </p>
          </div>
          <div className="option">
            <img className="img" alt="Clock outline" src={ClockOutline} />
            <p className="text-wrapper">
              The business will be asked to respond within 14 calendar days.
            </p>
          </div>
          <div className="option">
            <img className="img" alt="Notifications none" src={Notifications} />
            <p className="text-wrapper">
              {" "}
              You will be notified of the business' response when we receive it
              (or notified that we received no response).
            </p>
          </div>
          <div className="option">
            <img className="img" alt="Calendar" src={Calender} />
            <p className="text-wrapper">
              Complaints are usually closed within 30 days.
            </p>
          </div>
        </div>
      </div>
      <div class="navigation">
        <span class="next-icon">{<BottomNav />}</span>
      </div>
    </div>
  );
};
export default ComplaintProcess;
