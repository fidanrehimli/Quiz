import React from "react";
import "./weeks.css";
const Weeks = () => {
  return (
    <div>
      <section
        className="week"
        style={{
          backgroundImage: `url("https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png")`,
        }}
      >
        <h1>
          Deal Of The Week <hr></hr><button className="shopbtn">Shop Now</button>
        </h1>
      </section>
    </div>
  );
};

export default Weeks;
