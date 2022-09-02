import { render, screen, queryByAttribute } from "@testing-library/react";
import "@testing-library/jest-dom";
import Customer from "./Customer";

describe("Customer Component", () => {
  test("renders 'Contact us' button", () => {
    render(<Customer />);
    const contactBtn = screen.getByRole("button");
    expect(contactBtn).toBeInTheDocument();
  });

  test("renders 'Customer support' as text", () => {
    render(<Customer />);
    const customerText = screen.getByText(/Customer support/i);
    expect(customerText).toBeInTheDocument();
  });

  test("renders head phone icon", () => {
    const getById = queryByAttribute.bind(null, "id");
    const dom = render(<Customer />);
    const headIconEle = getById(dom.container, "Headphone_Icon");
    expect(headIconEle).toBeInTheDocument();
  });

  test("renders 'Zacheus is here to help you' as text", () => {
    render(<Customer />);
    const helpText = screen.getByText(/Zacheus is here to help you/i);
    expect(helpText).toBeInTheDocument();
  });
});
