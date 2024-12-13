const positions = {
  routeName: "To the dunes and back",
  myPosition: 0,
  peopleOnRoute: [
    {
      name: "Lex",
      position: 0,
    },
    {
      name: "Frikkie",
      position: 0,
    },
    {
      name: "Ronald",
      position: 0,
    },
  ],
};

export function getRoute() {
  for (let element of positions.peopleOnRoute) {
    if (element.position < 1)
      element.position = Math.min(element.position + Math.random() / 2, 1);
  }
  if (positions.myPosition < 1)
    positions.myPosition = Math.min(
      positions.myPosition + Math.random() / 2,
      1
    );

  return Promise.resolve(positions);
}
