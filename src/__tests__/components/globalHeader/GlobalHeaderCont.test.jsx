import GlobalHeader from "components/globalHeader/GlobalHeaderCont";
import { mount } from "enzyme";
import { getMaster } from "modules/common";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.mock("components/globalHeader/GlobalHeader", () => () => (
  <div id={"mockComponent"}>mockAccountMenuCom</div>
));
jest.mock("modules/common", () => {
  return {
    getMaster: jest.fn().mockImplementation(() => {
      return {
        type: "MOCK"
      };
    })
  };
});

const shallowWithStore = (component, store) =>
  mount(<Provider store={store}>{component}</Provider>);

describe("GlobalHeader Container", () => {
  const state = {
    common: {
      tabs: [
        { category: "ダッシュボード", pages: [{ id: "", name: "ダッシュボード" }] },
        {
          category: "KB",
          pages: [
            { id: "kbAdd", name: "追加" },
            { id: "kbEdit", name: "編集" },
            { id: "kbApply", name: "適用" }
          ]
        }
      ]
    }
  };

  const createMockStore = configureStore();
  const store = createMockStore(state);
  const wrapper = shallowWithStore(<GlobalHeader />, store);

  it("tabs", () => {
    const dom = wrapper.find("#mockComponent").parent();
    const props = dom.props();
    expect(props.tabs).toEqual(state.common.tabs);
  });

  it("getMaster", () => {
    const dom = wrapper.find("#mockComponent").parent();
    const props = dom.props();
    props.getMaster();
    expect(getMaster).toHaveBeenCalled();
  });
});
