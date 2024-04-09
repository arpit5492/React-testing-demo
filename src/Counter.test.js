import React from "react";
import Counter from "./Counter";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
    render(<Counter />);
});

test("Initial counter value should be 0", () => {
    const counterEle = screen.getByTestId("cnt");
    expect(counterEle).toBeInTheDocument;
});

test("On click of button, the counter should be 1", async () => {
    const btnEle = screen.getByTestId("btn");
    const counterEle = screen.getByTestId("cnt");
    expect(counterEle.textContent).toBe("0");
    fireEvent.click(btnEle);
    // await userEvent.click(btnEle);
    // userEvent.click(btnEle);
    waitFor(() => {
        expect(counterEle.textContent).toBe("1");
    });
    // expect(counterEle.textContent).toBe("1");
});

test("Input value should change", () => {
    const inpEle = screen.getByTestId("inp");
    fireEvent.change(inpEle, {
        target: {
            value: "Arpit"
        }
    });
    expect(inpEle.value).toBe("Arpit");
});
