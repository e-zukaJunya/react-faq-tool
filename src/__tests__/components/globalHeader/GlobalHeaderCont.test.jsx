import GlobalHeader from "components/globalHeader/GlobalHeaderCont";
import { mount } from "enzyme";
import { getMaster } from "modules/common";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// コンポーネントのモック
jest.mock("components/globalHeader/GlobalHeader", () => () => (
  <div id={"mockComponent"}>mockAccountMenuCom</div>
));

const shallowWithStore = (component, store) => {
  const context = {
    store
  };
  return mount(<Provider store={store}>{component}</Provider>, { context });
};

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

  it.skip("getMaster", () => {
    const dom = wrapper.find("#mockComponent").parent();
    const props = dom.props();
    expect(props.getMaster()).toEqual(getMaster());
  });
});
