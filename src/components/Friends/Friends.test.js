import friends from "../../data/friends.json";

test("Expect to have 5 friends in friends.json", () => {
    expect(friends.length).toBe(5);
});

test("Expect property Id to be type of Number", () => {
    friends.map((friend) => {
        expect(typeof friend.id).toBe('number');
    });
});

test("Expect property Pseudo to be type of String", () => {
    friends.map((friend) => {
        expect(typeof friend.pseudo).toBe('string');
    });
});

test("Expect property Phone to be type of String", () => {
    friends.map((friend) => {
        expect(typeof friend.phone).toBe('string');
    });
});

test("Expect HiddenActivities to be type of Array", () => {
    friends.map((friend) => {
        const hiddenActivities = Array.isArray(friend.hide);
        expect(hiddenActivities).toBe(true);
    });
});
