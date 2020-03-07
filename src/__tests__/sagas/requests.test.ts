import {
  getByAxios,
  postByAxios,
  putByAxios,
  patchByAxios,
  deleteByAxios
} from "sagas/requests";
import { AxiosAdapter } from "axios";
import mock from "sagas/mock";

jest.mock("sagas/mock", () => jest.fn());
const axiosMockAdapter = (mock as unknown) as jest.Mock<
  ReturnType<AxiosAdapter>,
  Parameters<AxiosAdapter>
>;

describe("axios test", () => {
  beforeEach(() => {
    axiosMockAdapter.mockClear();
  });

  it("returns success info", async () => {
    const url = "/foo";
    const data = { resultCode: 0, url: "pseudo url", message: "" };
    type Data = typeof data;
    const response = {
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
      data
    };

    axiosMockAdapter.mockResolvedValueOnce(response);
    expect(await getByAxios<Data>(url)).toMatchObject({
      res: {
        data: { resultCode: 0, url: "pseudo url", message: "" },
        status: 200
      }
    });
    const callArgs = axiosMockAdapter.mock.calls[0];
    // todo なぜかbaseurlがセットされてない
    console.log(callArgs[0].url);
    expect(axiosMockAdapter.mock.calls.length).toBe(1);
  });
});
