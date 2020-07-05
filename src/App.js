import React from "react";
import { App, View } from "framework7-react";

import routes from "./routes";

const f7params = {
  name: "Framework7 React Js",
  routes,
};

export default () => (
  <App params={f7params}>
    <View main url="/" />
  </App>
);
