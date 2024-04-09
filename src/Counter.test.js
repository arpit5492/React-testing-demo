import React from "react";
import Counter from "./Counter";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Snapshot test", () => {
    expect(render(<Counter />)).toMatchSnapshot();
})
