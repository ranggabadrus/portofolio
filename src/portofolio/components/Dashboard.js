import React, { useState } from "react";

import Background from "../../assets/img/rangga.jpg";
import Shawn from "../../assets/img/shawn.jpeg";
import Andi from "../../assets/img/andi.jpg";
import "./Dashboard.css";
import Footer from "../../shared/components/Footer";

export default function Dashboard() {
  const [contact, setContact] = useState(false);
  return (
    <div style={{}}>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "100%",
          height: "1024px",
          backgroundRepeat: "no-repeat",
          flex: 1,
          display: "flex",
        }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.8)",
              padding: "20px",
              color: "#358597",
            }}
          >
            <div>
              <h3>Hii There,</h3>
              <h1>I am Rangga Yudhistira Pratama</h1>
              <h2>Frontend Developer</h2>
              <h2>React JS and React Native</h2>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "70%",
          }}
        >
          <div
            style={{
              padding: "50px 20px",
              background: "linear-gradient(to right, #fefefe, #eaeaea)",
            }}
          >
            <h2>Work with passion while conquering the technology</h2>
            <p>
              I am a Glints Academy #3 alumni. Now, i am a Frontend Developer
              with tech stack skill React JS and React Native.
            </p>
            <p>
              My next goal is mastering backend side. Thus, i will completely
              become Fullstack Developer.
            </p>
            <p>
              I like coding so much, i love to spend my whole day to solve
              problem that i face on my task.
            </p>
          </div>
          <div
            style={{
              justifyContent: "flex-end",
              display: "flex",
              textAlign: "right",

              padding: "50px 20px",
              background: "linear-gradient(to left, #fefefe, #eaeaea)",
            }}
          >
            <div>
              <h2>Any type discussion?</h2>
              <p>Reach me here</p>
              <p>ranggabadrus@gmail.com</p>
            </div>
          </div>
          <div style={{ margin: "50px 0px", padding: "50px 0px" }}>
            <h2>What i have done.</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  border: "1px solid #eaeaea",
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0px 5px",
                  flexDirection: "column",
                }}
              >
                <h3>React JS</h3>

                <p>
                  <a href="https://hub.chendol.com" target="_blank">
                    hub.chendol.com
                  </a>
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #eaeaea",
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0px 5px",
                  flexDirection: "column",
                }}
              >
                <h3>React Native</h3>
                <p>
                  <a
                    href="https://play.google.com/store/apps/dev?id=7829369474949955718"
                    target="_blank"
                  >
                    Chendol app
                  </a>
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #eaeaea",
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0px 5px",
                  flexDirection: "column",
                }}
              >
                <h3>Backend</h3>
                <p>No work</p>
              </div>
            </div>
          </div>
          <div style={{ margin: "50px 0px", padding: "50px 0px" }}>
            <h2>What i have learnt</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  border: "1px solid #eaeaea",
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0px 5px",
                  flexDirection: "column",
                }}
              >
                <h3>Web development</h3>
                <div style={{ padding: "0px 10px", flex: 1 }}>
                  <p>Responsiveness web</p>
                  <p>CSS Framework (Material UI, Ant Design, & Reactstrap)</p>
                  <p>Deploying web using Heroku</p>
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #eaeaea",
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0px 5px",
                  flexDirection: "column",
                }}
              >
                <h3>Mobile development</h3>
                <div style={{ padding: "0px 10px", flex: 1 }}>
                  <p>Android environment</p>
                  <p>Ios environment</p>
                  <p>
                    CSS Mobile Framework(React native element & Native base)
                  </p>
                  <p>Deploying Android app to Playstore</p>
                  <p>Deploying Ios app to AppStore</p>
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #eaeaea",
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0px 5px",
                  flexDirection: "column",
                }}
              >
                <h3>Auxiliary skill</h3>
                <div style={{ padding: "0px 10px", flex: 1 }}>
                  <p>Javascript ES6</p>
                  <p>Remote Repository Git</p>
                  <p>
                    Management Remote Repository: GitHub, Bitbucket & Gitlab
                  </p>
                  <p>Heroku deployment</p>
                  <p>Playstore deployment</p>
                  <p>AppStore deployment</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "#eaeaea",
              background: "linear-gradient(to right,#eaeaea, #fefefe, #eaeaea)",
              margin: "50px 0px",
              padding: "50px 0px",
            }}
          >
            <div>
              <h1>Don't worry for contact</h1>
              <h1>I'm open to discussion</h1>
            </div>
            <div>
              <button
                onClick={() =>
                  window.open("https://t.me/RanggaYudhistiraPratama", "_blank")
                }
              >
                {/* {contact ? (
                  <h2>+62 823-8817-1308</h2>
                ) : ( */}
                <h2>Contact me now!</h2>
                {/* )} */}
              </button>
            </div>
          </div>
          <div
            style={{
              margin: "50px 0px",
              padding: "50px 0px",
            }}
          >
            <h2>Let's hear what people talk about me</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "50px",
              }}
            >
              <div
                style={{
                  border: "1px solid #eaeaea",
                  flex: 1,
                  margin: "0px 5px",
                  padding: "10px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      borderRadius: "5000px",
                      border: "1px solid #eaeaea",
                      height: "100px",
                      width: "100px",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundImage: `url(${Shawn})`,
                      backgroundSize: "100%",
                      padding: "10px",
                    }}
                  >
                    <div style={{ flex: 1 }}></div>
                  </div>
                  <div style={{ padding: "0px 20px" }}>
                    <h3>Shawn</h3>
                    <p>CEO Chendol Pte. Ltd.</p>
                  </div>
                </div>
                <div style={{}}>
                  <p>Description...</p>
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #eaeaea",
                  flex: 1,
                  margin: "0px 5px",
                  padding: "10px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      borderRadius: "5000px",
                      border: "1px solid #eaeaea",
                      height: "100px",
                      width: "100px",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundImage: `url(${Andi})`,
                      backgroundSize: "100%",
                      padding: "10px",
                    }}
                  ></div>
                  <div style={{ padding: "0px 20px" }}>
                    <h3>Andi Satriawan</h3>
                    <p>People Development at Glints.com</p>
                  </div>
                </div>
                <div style={{}}>
                  <p>Description...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
