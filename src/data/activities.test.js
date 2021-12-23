import activities from "./activities.json";

test("Expect to have 8 activities in activities.json", () => {
    expect(activities.length).toBe(8);
});

test("Expect property Label to be type of String", () => {
    activities.map((activity) => {
        expect(typeof activity.label).toBe('string');
    });
});

test("Expect property Checked to be type of Boolean", () => {
    activities.map((activity) => {
        expect(typeof activity.checked).toBe('boolean');
    });
});