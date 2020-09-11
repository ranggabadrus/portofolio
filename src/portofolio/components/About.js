import React from "react";
import Hero from "../../assets/img/rangga3.jpg";
import Sg from "../../assets/img/Sg3.jpg";
import Footer from "../../shared/components/Footer";

export default function About() {
  return (
    <div>
      <div
        style={{
          height: "390px",
          backgroundImage: `url(${Hero})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
              backgroundColor: "rgba(255,255,255,0.8)",
              color: "#263238",
              padding: "0px 20px",
            }}
          >
            <h1>About Me</h1>
            <h1>Rangga Yudhistira Pratama</h1>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0px",
        }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, marginRight: "10px" }}>
            <img src={Sg} style={{ width: "100%", height: "auto" }} />
          </div>
          <div style={{ flex: 2, marginLeft: "10px" }}>
            <p
              style={{
                backgroundColor: "#C0FFEE",
                border: "1px solid #20cb9d",
                padding: "20px",
              }}
            >
              In indonesian's ways, there are something called "Tak kenal maka
              tak sayang". So let me introduce my self.
            </p>
            <h2>Who am i?</h2>
            <p>Hello there,</p>
            <p>
              I was born in Padang at 9th June 1996. I complete my study as
              Associate's Degree on Software Engineering major at Polytechnic
              Negeri Batam. To be honest, at this point, after i graduate from
              my study, i have know nothing about programming, even my major is
              Software Engineering. Therefore, no one accept me to work in his
              company.
            </p>
            <p>
              What a lucky day, i found Glints Academy advertise on my facebook
              dashboard. I decide to start my journey from there. I learn
              programming in Glints around 3 months and mastering React Native
              framework.
            </p>
            <p>
              After 3 months learning and mastering React Native, now i am ready
              to catch my first job. Time by time i spend to apply a job, until
              i found Chendol Pte Ltd contact me and give me an offer to work on
              his company. Without a doubt, officially 10th June 2019 becomes my
              first day as programmer.
            </p>
            <p>
              Now here we are, Chendol treat me so well. I am a Frontend
              Developer with tech stack skills React JS and React Native in
              Chendol Pte Ltd. Soon, i believe i can be Fullstack Developer.
              Actually, i already learn Backend technology, but i have no
              project to apply my backend skill. But it is okay, it just about
              time to make me become a Fullstack Developer.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
