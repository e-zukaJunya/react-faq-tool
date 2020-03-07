import React from "react";
// import { createShallow, createMount } from "@material-ui/core/test-utils";
import { shallow, mount } from "enzyme";
import CircularDeterminate from "components/common/CircularDeterminate";
import renderer from "react-test-renderer";

describe("renders CircularDeterminate", () => {
  beforeEach(() => {
  });

  it("returns success info", async () => {
    const wrapper = renderer.create(<CircularDeterminate />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

// import App from './App';
// it('renders welcome message', () => {
//   const wrapper = shallow(<App />);
//   const welcome = <h2>Welcome to React</h2>;
//   // expect(wrapper.contains(welcome)).toBe(true);
//   expect(wrapper.contains(welcome)).toEqual(true);
// });
