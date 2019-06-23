import React from "react";
import { MMLTag } from "./base";

export class Image extends MMLTag {
  toReact(rc) {
    return <img className="mml-image" {...this.attr} />;
  }
}
