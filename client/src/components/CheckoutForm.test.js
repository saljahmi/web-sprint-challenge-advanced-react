import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />)
    const header = screen.getByText(/react plants/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);

    fireEvent.change(firstNameInput, {target: {value: 'Marge'} });
    fireEvent.change(lastNameInput, {target: {value: 'Simpson'} });
    fireEvent.change(addressInput, {target: {value: '123 Fake St.'} });
    fireEvent.change(cityInput, {target: {value: 'Springfield'} });
    fireEvent.change(stateInput, {target: {value: 'Oregon'} });
    fireEvent.change(zipInput, {target: {value: '58008'} });

    const checkoutButton = screen.getByRole('button');
    fireEvent.click(checkoutButton);

    const successMessage = screen.getByText(/you have ordered some plants! woo-hoo!/i)
    const firstName = screen.getByText(/marge/i)
    const lastName = screen.getByText(/simpson/i)
    const address = screen.getByText(/123 fake st./i)
    const city = screen.getByText(/springfield/i)
    const state = screen.getByText(/oregon/i)
    const zip = screen.getByText(/58008/i)

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();
});
