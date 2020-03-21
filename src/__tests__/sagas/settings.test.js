import { endProgress, startProgress } from "modules/common";
import { openErrDialog } from "modules/error";
import { getSettingsSuccess } from "modules/setting";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import { call, takeLatest } from "redux-saga/effects";
import { URLS } from "resources/configs";
import { ERR_MESSAGES, ERR_TITLES } from "resources/messages";
import { getByAxios } from "sagas/requests";
import { getSettings, settings } from "sagas/settings";

jest.mock("modules/common", () => {
  const orginalModule = jest.requireActual("modules/common");
  return {
    ...orginalModule,
    startProgress: jest.fn().mockImplementation(() => {
      return {
        type: "startProgress"
      };
    }),
    endProgress: jest.fn().mockImplementation(() => {
      return {
        type: "endProgress"
      };
    })
  };
});
jest.mock("modules/setting", () => {
  const orginalModule = jest.requireActual("modules/setting");
  return {
    ...orginalModule,
    getSettingsSuccess: jest.fn().mockImplementation(() => {
      return {
        type: "getSettingsSuccess"
      };
    })
  };
});
jest.mock("modules/error", () => {
  return {
    openErrDialog: jest.fn().mockImplementation(() => {
      return {
        type: "openErrDialog"
      };
    })
  };
});

it("export", () => {
  expect(settings).toStrictEqual([takeLatest("GET_SETTINGS", getSettings)]);
});

describe("settings saga", () => {
  it("getSettings success by testSaga", () => {
    const res = {
      data: {
        settings: [{ id: 200, name: "いろいろ", value: 2000 }]
      },
      status: 200
    };
    testSaga(getSettings)
      .next()
      .put(startProgress())
      .next()
      .call(getByAxios, URLS.SETTINGS)
      .next({ res })
      .put(endProgress())
      .next()
      .put(getSettingsSuccess())
      .next()
      .isDone();
    // 道中のモック関数が何を引数に呼ばれたかはここで確認
    expect(getSettingsSuccess).toHaveBeenCalledWith(res.data);
  });
  it("getSettings failure by testSaga", () => {
    const err = {
      status: 400
    };
    testSaga(getSettings)
      .next()
      .put(startProgress())
      .next()
      .call(getByAxios, URLS.SETTINGS)
      .next({ err })
      .put(endProgress())
      .next()
      .put(openErrDialog())
      .next()
      .isDone();

    // 道中のモック関数が何を引数に呼ばれたかはここで確認
    expect(openErrDialog).toHaveBeenCalledWith(ERR_TITLES.ERROR, ERR_MESSAGES.ERROR);
  });
  it("getSettings success by expectSaga", () => {
    const res = {
      data: {
        settings: [{ id: 200, name: "いろいろ", value: 2000 }]
      },
      status: 200
    };
    return expectSaga(getSettings)
      .provide([[call(getByAxios, URLS.SETTINGS), { res }]])
      .put(startProgress())
      .call(getByAxios, URLS.SETTINGS)
      .put(endProgress())
      .put(getSettingsSuccess())
      .run();
  });
  it("getSettings failure by expectSaga", () => {
    const err = {
      status: 400
    };
    return expectSaga(getSettings)
      .provide([[call(getByAxios, URLS.SETTINGS), { err }]])
      .put(startProgress())
      .call(getByAxios, URLS.SETTINGS)
      .put(endProgress())
      .put(openErrDialog())
      .run();
  });
});
