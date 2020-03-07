import HoverMenu from "components/globalHeader/HoverMenu";
import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";

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
  const tab = {
    category: "KB",
    pages: [
      { id: "kbAdd", name: "追加" },
      { id: "kbEdit", name: "編集" },
      { id: "kbApply", name: "適用" }
    ]
  };

  beforeEach(() => {});

  test("mount", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <HoverMenu tab={tab} />
      </MemoryRouter>
    );
    // expect(wrapper.debug()).toMatchSnapshot();
    const dom = wrapper.getDOMNode();
    expect(dom).toMatchSnapshot();

    const tabButton = wrapper.find("div[role='button']");
    expect(tabButton.text()).toBe(tab.category);
  });

  test("open", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <HoverMenu tab={tab} />
      </MemoryRouter>
    );
    wrapper.simulate("mouseenter");

    const dom = wrapper.getDOMNode();
    expect(dom).toMatchSnapshot();

    const menuButtons = wrapper.find("li");
    expect(menuButtons.length).toBe(tab.pages.length);

    const receiveTexts = menuButtons.map(item => item.text());
    const expectTexts = tab.pages.map(item => item.name);
    expect(receiveTexts).toStrictEqual(expectTexts);
  });

  test("close", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <HoverMenu tab={tab} />
      </MemoryRouter>
    );
    wrapper.simulate("mouseenter");
    wrapper.simulate("mouseleave");
    const dom = wrapper.getDOMNode();
    // todo menuが完全に消えていない（opacityは0）
    // アニメーションが完了していないせい？
    expect(dom).toMatchSnapshot();
  });

  test("click tab", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <HoverMenu tab={tab} />
      </MemoryRouter>
    );
    const tabButton = wrapper.find("div[role='button']");
    tabButton.simulate("click");
    const dom = wrapper.getDOMNode();
    expect(dom).toMatchSnapshot();
  });

  test("click menu", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <HoverMenu tab={tab} />
      </MemoryRouter>
    );
    wrapper.simulate("mouseenter");
    const menuButtons = wrapper.find("li");
    const targetBtn = menuButtons.at(0);
    targetBtn.simulate("click");
    const props = wrapper.childAt(0).props();
    expect(props.history.location.pathname).toContain(tab.pages[0].id);
  });
});
