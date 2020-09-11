import React, { useState } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();

  const [path, setPath] = useState("/");

  return (
    <div style={{ display: "flex", padding: "0px 20px" }}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flex: 1,
          color: "#20cb9d",
        }}
      >
        <h1 className="text-gradient">Rangga Yudhistira Pratama</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <ul>
          <li>
            <a
              className={path === "/" ? "active" : ""}
              href="#"
              onClick={() => {
                setPath("/");
                history.push("/");
              }}
            >
              <h3>Dashboard</h3>
            </a>
          </li>
          <li>
            <h3>
              <a
                className={path === "about" ? "active" : ""}
                href="#"
                onClick={() => {
                  setPath("about");
                  history.push("/about");
                }}
              >
                About
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a
                className={path === "experiences" ? "active" : ""}
                href="#"
                onClick={() => {
                  setPath("experiences");
                  history.push("/experiences");
                }}
              >
                Experiences
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a
                className={path === "portofolio" ? "active" : ""}
                href="#"
                onClick={() => {
                  setPath("portofolio");
                  history.push("/portofolio");
                }}
              >
                Portofolio
              </a>
            </h3>
          </li>
          {/* <li>
            <h3>
              <a href="#">Contact</a>
            </h3>
          </li> */}
          <li style={{}}>
            <h3>
              <a
                href="https://t.me/RanggaYudhistiraPratama"
                target="_blank"
                style={{
                  color: "#20c9bd",
                }}
              >
                Chat me!
              </a>
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
