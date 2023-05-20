import { render } from "@testing-library/react";
import { date } from "yup";
import Footer from "../Footer";

test("Check Whether footer is loaded or not on render", () => {
  const footer = render(<Footer date={new Date()} />);

  //console.log(footer);
  const siteowner = footer.getByTestId("Owner");
  //console.log(siteowner);
  expect(siteowner.innerHTML).toBe(
    `© 2023 Food Junction by <b class=\"text-purple-700\">Shubham Pakhale</b> `
  );
});
