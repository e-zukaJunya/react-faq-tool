import React from "react";
import { createShallow, createMount } from "@material-ui/core/test-utils";
import { shallow, mount } from "enzyme";
import AlertDialog from "components/common/AlertDialog";
import renderer from "react-test-renderer";
import {createRenderer} from 'react-test-renderer/shallow';

describe("AlertDialog", () => {
  //   jest.mock("../SomeDirectory/SomeComponent", () => "SomeComponent");

  beforeEach(() => {});

  test("open", async () => {
    const testRenderer =  createRenderer();
    // const renderer =  ShallowRenderer();
    const wrapper = testRenderer.render(<AlertDialog open={true} onClickClose={() => {}} />);
    const wrapper2 = renderer.create(<AlertDialog open={true} onClickClose={() => {}} />);
    // const root =  wrapper2.root
    expect(wrapper).toMatchSnapshot();
    expect(wrapper2).toMatchSnapshot();
    // expect(root).toMatchSnapshot();
    // expect(wrapper.toJSON()).toMatchSnapshot();
    // const wrapper2 = mount(<AlertDialog open={true} onClickClose={() => {}} />);
    const wrapper3 = shallow(<AlertDialog open={true} onClickClose={() => {}} />);
    // wrapper2.children()
    const button = wrapper3.find("button");
    // console.log(button.html())
    console.log(button.length);
    // wrapper2.children()
    // wrapper2.shallow()
    // wrapper2.update()
    // wrapper2.dive()
    // console.log(button.html())
    const children = button.children();
    const childrenButton = button.children("button");
    const parent = wrapper3.parent();
    const parents = wrapper3.parents();
    // const children2 = wrapper3.dive().children("button");
    const children3 = wrapper3.parent().find("button");
    const children4 = wrapper3.parents().find("button");
    const children5 = wrapper3.parents().children().find("button");
    console.log(children.length);
    // console.log(children2.length);
    console.log(parent.length);
    console.log(parents.length);
    console.log(children3.length);
    console.log(children4.length);
    console.log(children5.length);
    console.log(childrenButton.length);
    // expect(children2).toMatchSnapshot();
  });

//   test("close", async () => {
//     const wrapper = renderer.create(<AlertDialog open={false} onClickClose={() => {}} />);
//     expect(wrapper.toJSON()).toMatchSnapshot();
//   });
});
