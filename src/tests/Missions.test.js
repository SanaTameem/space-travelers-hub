import React from "react";
import { render } from "@testing-library/react";
import Missions from "../components/Missions";

describe("Missions", () => {
  test("renders Missions component without crashing", () => {
    const { asFragment } = render(<Missions />);
    expect(asFragment()).toMatchSnapshot();
  });
});
