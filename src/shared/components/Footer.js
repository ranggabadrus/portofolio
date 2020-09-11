import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#358597",
        color: "#fff",
        justifyContent: "center",
        display: "flex",
        padding: "20px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ margin: "0px 0" }}>Portofolio</h1>
          <h1 style={{ margin: "20px 0" }}>ranggabadrus@gmail.com</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <div>
            <div>
              <a
                href="https://www.linkedin.com/in/rangga-yudhistira-pratama-9578b6176/"
                target="_blank"
                className="footer"
              >
                linkedin: Rangga Yudhistira Pratama (slow response)
              </a>
            </div>

            <div>
              {" "}
              <a
                href="https://www.instagram.com/rangga.yudhistira.pratama/"
                target="_blank"
                className="footer"
              >
                instagram: rangga.yudhistira.pratama (fast response)
              </a>
            </div>
          </div>
          <div>
            <div>
              <a
                href="https://www.facebook.com/canggaick/"
                target="_blank"
                className="footer"
              >
                facebook: Rangga Yudhistira Pratama (slow response)
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/RanggaBadrus"
                target="_blank"
                className="footer"
              >
                twitter: @ranggabadrus (very slow response)
              </a>
            </div>
          </div>
          <div>
            <div>
              <a
                href="https://wa.link/jjejjw"
                target="_blank"
                className="footer"
              >
                whatsapp: +6282388171308 (very very fast respawn)
              </a>
            </div>
            <div>
              <a
                href="https://t.me/RanggaYudhistiraPratama"
                target="_blank"
                className="footer"
              >
                telegram: @RanggaYudhistiraPratama (very fast respawn)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
