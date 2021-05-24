import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import * as redux from "react-redux";

import store from "../../redux/store";
import Header from "./index";

const renderItem = (weather) =>
  render(
    <Provider store={store}>
      <Header weather={weather} />
    </Provider>
  );

it("should not render Weather panel", () => {
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue(true);
  renderItem();
  const linkElement = screen.getByText(/Celsius:/i);
  expect(linkElement).toBeInTheDocument();
});
