import "react-native";
import React from "react";
import Grid from "../Grid";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Grid />).toJSON();
  expect(tree).toMatchSnapshot();
});
