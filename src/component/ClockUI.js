import React, { useEffect } from "react";
import "../App.css";

function ClockUI() {

  function dateNew() {
    if (new Date().getHours()) {
      document
        .querySelector(".short")
        .style.setProperty("--hr", `${new Date().getHours() * 30}deg`);
        if(new Date().getMinutes() > 50) {
          document
        .querySelector(".short")
        .style.setProperty("--hr", `${new Date().getHours() * 30 + 30}deg`);
        }
    }
    if (new Date().getMinutes()) {
      document
        .querySelector(".long")
        .style.setProperty("--min", `${new Date().getMinutes() * 6}deg`);
    }
    if (new Date().getSeconds()) {
      document
        .querySelector(".sec")
        .style.setProperty("--sec", `${new Date().getSeconds() * 6}deg`);
    }
  }

  useEffect(() => {
    setInterval(dateNew, 1000);
  }, []);

  return (
    <div>
      <div className="clock">
        <div className="dot">
          <div className="tick short"></div>
          <div className="tick long"></div>
          <div className="tick sec"></div>
        </div>
        <div className="clock-wrapper">
          <span className="pos-absolute t1">1 </span>
          <span className="pos-absolute t2">2 </span>
          <span className="pos-absolute t3">3 </span>
          <span className="pos-absolute t4">4 </span>
          <span className="pos-absolute t5">5 </span>
          <span className="pos-absolute t6">6 </span>
          <span className="pos-absolute t7">7 </span>
          <span className="pos-absolute t8">8 </span>
          <span className="pos-absolute t9">9 </span>
          <span className="pos-absolute t10">10 </span>
          <span className="pos-absolute t11">11 </span>
          <span className="pos-absolute t12">12 </span>
        </div>
      </div>
    </div>
  );
}

export default ClockUI;
