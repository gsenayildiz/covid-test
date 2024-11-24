import { render, screen } from "@testing-library/react";
import Heading from "../pages/detail/heading";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { exaData } from "../utils/constatnt";

// test ortamında sahte storelar oluturmamızı sağlayacak fonksiyonu kurduk
const mockStore = configureStore([thunk]);

test("store da ki veri yüklenme durumdayken ekrana loader basılır", () => {
  // yüklenme durumundaki store 'un sahte versiyonunu oluştur
  const store = mockStore({ isLoading: true, error: null, data: null });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  // loader bileşeni ekrana basıldı mı kontrol et
  screen.getByTestId("heading-loader");
});

test("stordaki veri yüklendikten sonra ekrana ülke bilgileri basılır", () => {
  // store un yüklenme bititği andaki versiyonunu simüle et
  const store = mockStore({ isLoading: false, error: null, data: exaData });

  // bileşeni render la
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  // ülke bayrağı ekrana geldi mi
  const flagImg = screen.getByAltText(/The flag of Turkey/);

  // bayrağın kaynağı doğru mu
  expect(flagImg).toHaveAttribute("src", "https://flagcdn.com/w320/tr.png");

  // ülke ismi ekrana geldi mi
  screen.getByText("Turkey");
});
