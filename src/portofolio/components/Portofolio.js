import React, { useState } from "react";
import PortofolioCategory from "./PortofolioCategory";
import "./Portofolio.css";
import Footer from "../../shared/components/Footer";

export default function Portofolio() {
  const [portofolio, setPortofolio] = useState("all");
  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
          }}
        >
          <div
            style={{
              flex: 1,
            }}
          >
            <h2>What services you will</h2>
            <h2>Get from me!</h2>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <ul
              style={{
                float: "left",
                padding: "16px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <li
                style={{
                  padding: "16px",
                  borderBottom:
                    portofolio === "all"
                      ? "3px solid #20cb9d"
                      : "3px solid #000",
                }}
              >
                <a
                  onClick={() => {
                    setPortofolio("all");
                  }}
                >
                  All
                </a>
              </li>
              <li
                style={{
                  padding: "16px",
                  borderBottom:
                    portofolio === "reactnative"
                      ? "3px solid #20cb9d"
                      : "3px solid #000",
                }}
              >
                <a
                  onClick={() => {
                    setPortofolio("reactnative");
                  }}
                >
                  React Native
                </a>
              </li>
              <li
                style={{
                  padding: "16px",
                  borderBottom:
                    portofolio === "reactjs"
                      ? "3px solid #20cb9d"
                      : "3px solid #000",
                }}
              >
                <a
                  onClick={() => {
                    setPortofolio("reactjs");
                  }}
                >
                  React JS
                </a>
              </li>
              <li
                style={{
                  padding: "16px",
                  borderBottom:
                    portofolio === "po"
                      ? "3px solid #20cb9d"
                      : "3px solid #000",
                }}
              >
                <a
                  onClick={() => {
                    setPortofolio("po");
                  }}
                >
                  Product Owner
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div
          style={{
            width: "70%",
            display: "flex",
          }}
        >
          <PortofolioCategory category={portofolio} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
