import "@testing-library/jest-dom"; // this is for toBeInTheDocumet function of react testing library
import { render, waitFor } from "@testing-library/react";
import RestaurantList from "../RestaurantList";
import { Provider } from "react-redux";
import store from "../../utils/Redux/store";
import { StaticRouter } from "react-router-dom/server";
import Restaurant_API_Data from "../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Restaurant_API_Data);
    },
  });
});

test("Shimmer Cards on Home Page of Food Junction Application", () => {
  const Homepage = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantList />
      </Provider>
    </StaticRouter>
  );

  //console.log(Homepage);

  const shimmer = Homepage.getByTestId("shimmer");
  //console.log(shimmer);

  expect(shimmer).toBeInTheDocument();
});

test("Search restaurants Textbox on Home Page of Food Junction Application", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantList />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("searchbtn")));

  const restlist = body.findByTestId("res_list");
  //expect(restlist).toBe(15);
  console.log(restlist);
});
