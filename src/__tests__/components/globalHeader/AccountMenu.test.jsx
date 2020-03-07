import AccountMenu from "components/globalHeader/AccountMenu";
import { mount, shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";

// jsdomにcreateRangeを実装
document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document
  }
});

describe("AlertDialog", () => {
  beforeEach(() => {});

  test("mount", () => {
    const wrapper = mount(<AccountMenu />);
    // const wrapper = shallow(<AccountMenu />);
    const dom = wrapper.getDOMNode();
    expect(dom).toMatchSnapshot();
  });

  test("open", () => {
    const wrapper = mount(<AccountMenu />);
    const btn = wrapper.find("button");
    btn.simulate("click");

    const dom = wrapper.getDOMNode();
    expect(dom).toMatchSnapshot();
  });

  // todo ClickAwayListenerのテストができない
  test.skip("close", async () => {
    // const wrapper = mount(<AccountMenu />);
    const wrapper = mount(
      <div>
        <AccountMenu />
        <div id={"otherElm"}></div>
      </div>
    );

    const btn = wrapper.find("button");
    btn.simulate("click");

    const dom = wrapper.getDOMNode();
    expect(dom).toMatchSnapshot();
  });

  test.skip("click logout", () => {
    const wrapper = mount(<AccountMenu />);
    const btn = wrapper.find("li");
    btn.simulate("click");
  });
});
