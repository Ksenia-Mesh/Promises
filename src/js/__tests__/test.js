import GameSaving from "../GameSaving";
import GameSavingLoader from "../GameSavingLoader";

const data = `{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}`;

test("test 1", () => {
  const response = new GameSaving(JSON.parse(data));
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  };
  expect(response).toEqual(result);
});

test("test 2", async () => {
  const result = JSON.parse(data);

  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(result);
  });
});