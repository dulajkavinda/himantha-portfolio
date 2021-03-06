import React from "react";
import Image from "./Image";
import Text from "./Text";
import Button from "./Button";

import TextMobile from "./TextMobile";

import useWindowSize from "../../hooks/useWindowSize";

export default function Header() {
  const size = useWindowSize();
  return (
    <div>
      <div class="container">
        <div
          class="row"
          style={{
            marginTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
          style={{ marginTop: "2rem" }}
        >
          <div class="col-3">
            <Image />
          </div>
          <div class="col-7">
            <Text />
          </div>
          <div class="col-2">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
