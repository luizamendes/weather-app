import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { WeatherInfo } from "./WeatherInfo";

describe("WeatherInfo page Snapshot", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <WeatherInfo />
        </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
