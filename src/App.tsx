import React from "react";

import { AppLayout } from "./layout";
import { Widget } from "./components";

import { colors } from "./mock";
import { Colors } from "./types";

export const App = () => {
  const handleChangeColor = (colors: Colors[]) => {
    console.log(colors);
  };

  return (
    <AppLayout>
      <Widget colors={colors} onChange={handleChangeColor} />
    </AppLayout>
  );
};
