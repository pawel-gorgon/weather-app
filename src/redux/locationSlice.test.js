import store from "./store";
import { setWeather } from "./locationSlice";
import { sampleWeather } from "../constants/sampleJson";

it("should have empty weather array", () => {
  let state = store.getState().weather;
  expect(state.weathers).toHaveLength(0);
});

it("should have selected weather with id", () => {
  let state = {};
  store.dispatch(setWeather(sampleWeather.consolidated_weather));
  state = store.getState().weather;
  let weather = state.weathers.find((p) => p.id === 5256398595162112);
  expect(weather.id).toBe(5256398595162112);
});

it("should pass for deep equality check", () => {
  let state = {};
  store.dispatch(setWeather(sampleWeather.consolidated_weather));
  state = store.getState().weather;
  // deep object equality
  expect(state.weathers).toEqual(sampleWeather.consolidated_weather);
});
