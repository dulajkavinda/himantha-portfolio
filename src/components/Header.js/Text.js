import React from "react";

export default function Text() {
  return (
    <div>
      <div className="row">
        <h1 style={{ fontWeight: "bold" }}>Himantha Tharindu</h1>
      </div>
      <div className="row">
        <h3 style={{ color: "gray" }}>Software Developer</h3>
      </div>
      <div class="row">
        <a
          href="https://www.facebook.com/himantha95/"
          class="p-2 rounded-circle"
          style={{ background: "#e040fb", marginRight: "0.5rem" }}
        >
          <img
            src={process.env.PUBLIC_URL + "./icons8-facebook-96 .png"}
            class="rounded-circle"
            alt="himantha"
            width="30rem"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/himantha-samarasinghe-66250b202/"
          class="p-2 rounded-circle"
          style={{ background: "#e040fb", marginRight: "0.5rem" }}
        >
          <img
            src={process.env.PUBLIC_URL + "./icons8-linkedin-96.png"}
            class="rounded-circle"
            alt="himantha"
            width="30rem"
          />
        </a>
        <a
          href="https://www.instagram.com/__himantha__/"
          class="p-2 rounded-circle"
          style={{ background: "#e040fb", marginRight: "0.5rem" }}
        >
          <img
            src={process.env.PUBLIC_URL + "./icons8-instagram-96 .png"}
            class="rounded-circle"
            alt="himantha"
            width="30rem"
          />
        </a>
        <a
          href="mailto:himantha@himantha.gay"
          class="p-2 rounded-circle"
          style={{ background: "#e040fb", marginRight: "0.5rem" }}
        >
          <img
            src={process.env.PUBLIC_URL + "./icons8-email-96 .png"}
            class="rounded-circle"
            alt="himantha"
            width="30rem"
          />
        </a>
      </div>
    </div>
  );
}
