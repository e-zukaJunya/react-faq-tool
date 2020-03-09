import GlobalHeader from "components/globalHeader/GlobalHeader";
import { mount, shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

// 子コンポーネントのモック
jest.mock("components/globalHeader/AccountMenu", () => () => <div>mockAccountMenuCom</div>);
jest.mock("components/globalHeader/HoverMenu", () => () => (
  <div className={"mockHoverMenuCom"}>mockHoverMenuCom</div>
));

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
  const tabs = [
    { category: "ダッシュボード", pages: [{ id: "", name: "ダッシュボード" }] },
    {
      category: "KB",
      pages: [
        { id: "kbAdd", name: "追加" },
        { id: "kbEdit", name: "編集" },
        { id: "kbApply", name: "適用" }
      ]
    }
  ];
  const getMaster = jest.fn();

  test("mount", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <GlobalHeader tabs={tabs} getMaster={getMaster} />
      </MemoryRouter>
    );
    const dom = wrapper.getDOMNode();
    expect(dom).toMatchSnapshot();

    const mockComs = wrapper.find(".mockHoverMenuCom");
    expect(mockComs.length).toBe(tabs.length);
  });

  test("click button", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <GlobalHeader tabs={tabs} getMaster={getMaster} />
      </MemoryRouter>
    );
    const button = wrapper.find("button");
    button.simulate("click");
    expect(getMaster).toHaveBeenCalled();
  });
});
