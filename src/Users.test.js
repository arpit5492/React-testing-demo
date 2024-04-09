import React from "react";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import User from "./User";

test("Snapshot test", () => {
    expect(render(<User />)).toMatchSnapshot();
});    