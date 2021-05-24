import React from "react";
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import { Provider } from "react-redux";
import * as redux from "react-redux";

import store from "../../redux/store";
import WeekForecastPanel from "./index";
import { sampleWeather } from "../../constants/sampleJson";

const renderItem = (weather) =>
  render(
    <Provider store={store}>
      <WeekForecastPanel weather={weather} />
    </Provider>
  );

it("should not render Weekly Weather panel", () => {
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue({ title: "Berlin", weathers: [] });
  renderItem();
  const linkElement = screen.queryByText(/Berlin/i);
  expect(linkElement).not.toBeInTheDocument();
});

it("should render Weekly Weather panel", () => {
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue({
    title: "Berlin",
    weathers: sampleWeather.consolidated_weather,
  });
  renderItem();
  const linkElement = screen.queryByText(/Tommorow/i);
  expect(linkElement).toBeInTheDocument();
});
