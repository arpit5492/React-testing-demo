import React from "react";
import Counter from "./Counter";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Initial counter value should be 0", () => {
    const counter = render(<Counter />);
    const counterEle = counter.getByTestId("cnt");
    expect(counterEle).toBeInTheDocument;
});

test("On click of button, the counter should be 1", () => {
    const counter = render(<Counter />);
    const btnEle = counter.getByTestId("btn");
    const counterEle = counter.getByTestId("cnt");
    expect(counterEle.textContent).toBe("0");
    // fireEvent.click(btnEle);
    userEvent.click(btnEle);
    waitFor(() => {
        expect(counterEle.textContent).toBe("1");
    });
});
