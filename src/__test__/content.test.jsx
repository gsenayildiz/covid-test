import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Content from "../pages/detail/content";
import { thunk } from "redux-thunk";
import configureStore from "redux-mock-store";
import { exaData } from "../utils/constatnt";

const mockStore = configureStore([thunk]);

test("store yüklenem durumundayken content bileşeni ekrana loader basar", () => {
  const store = mockStore({ isLoading: true, error: false, data: null });
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  screen.getAllByTestId("content-loader");
});

test("store hata durumundayken content bileşeni hatayı ekrana basar", () => {
  // store'un hata durumundaki halini simüle et
  const store = mockStore({
    isLoading: false,
    error: "404 not found",
    data: null,
  });
  // content bileşenini renderla
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  // ekrana hata bileşeni geldi mi?
  screen.getByText("404 not found");
});

test("store'a veri geldiği seneryoda content bileşni ekrana kartları basar", () => {
  const store = mockStore({
    isLoading: false,
    error: null,
    data: exaData,
  });
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  // covid nesnesini diziye çevir
  const arr = Object.entries(exaData.covid);

  // dizideki her bir eleman için ekrana kartlar basılır
  arr.forEach((item) => {
    // ekrana başlıklar geldi mi
    screen.getByText(item[0].split("_").join(" "));

    // ekrana değerler geldi mi
    screen.getAllByText(item[1]);
  });
});
