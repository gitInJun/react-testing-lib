import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
    it("matches snapshot", () => {
        const utils = render(<Profile username="dlswns6532" name="황인준" />);
        expect(utils.container).toMatchSnapshot();
    });
    it("shows the props correctly", () => {
        const utils = render(<Profile username="dlswns6532" name="황인준" />);
        utils.getByText("dlswns65321");
        utils.getByText("(황인준)");
        // utils.getByText("dlswns6532 (황인준)");
    });
});