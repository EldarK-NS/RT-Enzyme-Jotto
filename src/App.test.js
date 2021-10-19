import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";
import { getSecretWord as mockGetSecretWord } from "./actions";

//activate global mock to make sure getSecretWord doesn't make network call
jest.mock("./actions");

const setup = () => {
  return mount(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    //clear the mock from previous test
    mockGetSecretWord.mockClear();
  });
  test("getSecretWord on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test("getSecretWord does not run on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    //using setProps because wrapper.update()  doesn't trigger useEffect
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
