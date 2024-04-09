import React from "react";
import Counter from "./Counter";
import {render, screen} from "@testing-library/react";

test("Initial counter value should be 0", () => {
    const counter = render(<Counter />);
    const counterEle = counter.getByText(0);
    expect(counterEle).toBeInTheDocument;
});
