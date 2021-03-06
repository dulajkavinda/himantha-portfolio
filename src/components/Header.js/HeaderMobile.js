import React from "react";
import Image from "./Image";
import TextMobile from "./TextMobile";
import Button from "./Button";

export default function Header() {
  return (
    <div>
      <div class="container">
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Image />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextMobile />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
