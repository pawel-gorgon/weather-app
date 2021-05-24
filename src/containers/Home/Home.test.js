import React from "react";
import { render, screen } from "@testing-library/react";
import * as notistack from "notistack";
import { Provider } from "react-redux";
import * as redux from "react-redux";

import store from "../../redux/store";
import Home from "./index";
import { sampleWeather } from "../../constants/sampleJson";

const renderItem = (weather) =>
  render(
    <Provider store={store}>
      <Home weather={weather} />
    </Provider>
  );

it("should render Home", () => {
  const spy2 = jest.spyOn(notistack, "useSnackbar");
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue({
    title: "Berlin",
    weathers: sampleWeather.consolidated_weather,
  });
  spy2.mockReturnValue({ enqueueSnackbar: jest.fn() });
  renderItem();
  const linkElement = screen.getByText(/Berlin/i);
  expect(linkElement).toBeInTheDocument();
});
