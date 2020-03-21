import React from "react";
import { shallow, mount } from "enzyme";
import CircularDeterminate from "components/common/CircularDeterminate";
import renderer, { act } from "react-test-renderer";

describe("renders CircularDeterminate", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it("first", async () => {
    const wrapper = renderer.create(<CircularDeterminate />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  // useEffectのsetInterval実行
  it("after 1000ms", async () => {
    const wrapper = renderer.create(<CircularDeterminate />);
    await act(async () => {
      // Progressが100になるルートを確かめるため3000
      jest.runTimersToTime(3000);
    });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  // useEffctのreturn実行
  it("unmount", async () => {
    const wrapper = renderer.create(<CircularDeterminate />);
    wrapper.unmount();
    // clearIntervalが何かNumber型の値を引数に呼ばれたことをチェック
    expect(clearInterval).toHaveBeenCalledWith(expect.any(Number));
  });
});
