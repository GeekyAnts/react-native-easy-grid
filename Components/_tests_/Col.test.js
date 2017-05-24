import "react-native";
import React from "react";
import Col from "../Col";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Col />).toJSON();
  expect(tree).toMatchSnapshot();
});
