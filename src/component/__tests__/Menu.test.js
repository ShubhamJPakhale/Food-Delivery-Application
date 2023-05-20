import "@testing-library/jest-dom"; // this is for toBeInTheDocumet function of react testing library
import { render, waitFor } from "@testing-library/react";
import HorecaMenu from "../HorecaMenu";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/Redux/store";
import { StaticRouter } from "react-router-dom/server";
import Menu_Data from "../mocks/Menu";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Menu_Data);
    },
  });
});

test("Update Cart on Add of items in the cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <HorecaMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menuitems")));

  //const addmenu = body.getAllByTestId("addbtn");
  console.log(body);
});
