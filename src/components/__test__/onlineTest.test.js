import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "../registerForm";

describe("Test the registration component", () => {
    test("render the registration form with 1 button", async () => {
        render(<RegisterForm />)
        const buttonList = await screen.findAllByRole("button")
        expect(buttonList).toHaveLength(1);
    })

    test("email input field should accept email", () => {
        render(<RegisterForm />)
        const email = screen.getAllByPlaceholderText("Enter Email")
        userEvent.type(email, "anup");
        expect(email.value).not.toMatch("anupamtripathi262@gmail.com")
    })
    test("phone input field should accept number", () => {
        render(<RegisterForm />)
        const phone = screen.getAllByPlaceholderText("contact number")

        expect(phone).toHaveAttribute("type", "Number")
    })
    test("username input field should accept text", () => {
        render(<RegisterForm />)
        const username = screen.getAllByPlaceholderText("Name")

        expect(username).toHaveAttribute("type", "text")
    })
})