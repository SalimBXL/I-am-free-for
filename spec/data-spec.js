const Activities = require("../src/data/activities.json");

describe("Testing Data", () => {
    let activities = Activities;

    it("We have an array of 8 activities", () => {
        expect(activities.length).toBe(8);
    });

    

    it("expect the Label property to exist", () => {
        activities.map((activity) => {
            expect(activity.label).toBeDefined();
        });
    });

    it("expect the label to be a string", () => {
        activities.map((activity) => {
            expect(activity.label).toEqual(jasmine.any(String));
        });
    });



    it("expect the Checked property to exist", () => {
        activities.map((activity) => {
            expect(activity.checked).toBeDefined();
    });

    it("expect the Checked property to be boolean", () => {
        activities.map((activity) => {
            expect(activity.checked).toEqual(jasmine.any(Boolean));
        });
    });
});