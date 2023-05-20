import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/Redux/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should be loaded on rendering of Header component", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //console.log(header);

  const logo = header.getByTestId("logo");
  //console.log(logo);

  expect(logo.src).toBe(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPoqdY7-n5XF1HkFq8TY_TxLDq07EEj9vV_5j071NSat4H4K17LJVZCIiekkxgCyYQsaw&usqp=CAU"
  );
});

test("Cart Items should be 0 on rendering of Header component", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //console.log(header);

  const cartitem = header.getByTestId("cart-item");
  //console.log(cartitem);

  expect(cartitem.innerHTML).toBe("Cart - 0 items");
});
