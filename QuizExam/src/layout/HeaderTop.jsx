import React from "react";
import "./header.css";
import { Select } from "antd";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

const HeaderTop = () => {
  const { Option } = Select;

  return (
    <header className="topheader">
      <div>
        <p style={{marginTop:"20px"}}>FREE SHIPPING ON ALL U.S ORDERS OVER $50</p>
      </div>
      <div className="options">
        <Select defaultValue="USD">
          <Option value="CAD">CAD</Option>
          <Option value="AUD">AUD</Option>
          <Option value="EUR">EUR</Option>
          <Option value="GPB">GPB</Option>
        </Select>
        <Select className="options" defaultValue="English">
          <Option value="French">French</Option>
          <Option value="Italian">Italian</Option>
          <Option value="German">German</Option>
          <Option value="Spanish">Spanish</Option>
        </Select>
        <Select defaultValue="My Account">
          <Option value="Sign in">
            <FaSignInAlt />
            Sign in
          </Option>
          <Option value="Register">
            <FaUserPlus />
            Register
          </Option>
        </Select>
      </div>
    </header>
  );
};

export default HeaderTop;
