import React from "react";
import Section from "../components/Section";
import Model_S from "../assets/images/model-s.jpg";
import Model_Y from "../assets/images/model-y.jpg";
import Model_3 from "../assets/images/model-3.jpg";
import Model_X from "../assets/images/model-x.jpg";
import Solar_Panel from "../assets/images/solar-panel.jpg";
import Solar_Roof from "../assets/images/solar-roof.jpg";
import Accessories from "../assets/images/accessories.jpg";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div
      style={{
        height: "100vh",
      }}
    >
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={Model_S}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={Model_Y}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={Model_3}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={Model_X}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels In America"
        description="Money-back guarantee"
        backgroundImg={Solar_Panel}
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
        backgroundImg={Solar_Roof}
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        backgroundImg={Accessories}
        leftBtnText="Shop now"
      />
    </div>
    </>
    
  );
};

export default Home;
