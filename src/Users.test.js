import React from "react";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import User from "./User";

test("All the list items are rendered", async () => {
    render(<User />);
    const liEle = await screen.findAllByRole("listitem");
    expect(liEle).not.toHaveLength(0);
});     