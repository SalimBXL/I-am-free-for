import React from "react";
//import reactDom from "react-dom";
import renderer from "react-test-renderer";
import App from "./App";

it("App Snapshot Test", () => {
    /*
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
    */

    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});