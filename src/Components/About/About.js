import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h3>
        Secret About <span style={{ color: "tomato" }}>{user?.email}</span>
      </h3>
    </div>
  );
};

export default About;
