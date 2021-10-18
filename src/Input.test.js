import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

test("Input renders without errors", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});
test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

//! тестирование контролируемого инпута и useState
describe("state conrolled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = originalUseState;
  });
  //! обновление стейта во время ввода текста в инпут
  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  //! очистка поля инпут и стейта после нажатия кнопки
  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});

//! если имеем несколько хуков то в тестах изменяется только  const inputBox = findByTestAttr(wrapper, "input-box"); остальное остается прежним

//TODO: этот метод тестирования useState если мы проводим деструктуризацию хука в импорте
//!mock entire module for destructuring useState
// const mockSetCurrentGuess = jest.fn();
// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }));

//!for destructurng useState
// describe("state conrolled input field", () => {
//   test("state updates with value of input box upon change", () => {

//     const wrapper = setup();
//     const inputBox = findByTestAttr(wrapper, "input-box");

//     const mockEvent = { target: { value: "train" } };
//     inputBox.simulate("change", mockEvent);

//     expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
//   });
// });
