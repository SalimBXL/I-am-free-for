const { isYieldExpression } = require("typescript");
const Activities = require("../src/data/activities.json");

describe("Testing Data", () => {
    let activities = Activities;

    it("We have an array of 8 activities", () => {
        expect(activities.length).toBe(8);
    });

    it("expect the Label property to be filled", () => {
        activities.map((activity) => {
            expect(activity.label).toBeTruthy();
        });
    });

    it("expect the Checked property to exists", () => {
        activities.map((activity) => {
            expect(activity.checked).toBeTruthy();
        });
    });
});