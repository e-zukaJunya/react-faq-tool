import settings from "sagas/settings";

jest.mock("sagas/requests", () => jest.fn());
// const axiosMockAdapter = (mock as unknown) as jest.Mock<
//   ReturnType<AxiosAdapter>,
//   Parameters<AxiosAdapter>
// >;

describe("settings", () => {
  it("GET_SETTINGS", async () => {});
});
