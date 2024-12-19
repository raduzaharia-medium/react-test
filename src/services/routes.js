/**
 * @typedef {Object} Person
 * @property {string} name - The name of the person.
 * @property {number} position - The current position of the person.
 */

/**
 * @typedef {Object} Positions
 * @property {string} routeName - The name of the route.
 * @property {number} myPosition - The current position of the user.
 * @property {Person[]} peopleOnRoute - The list of people on the route.
 */

/** @type {Positions} */
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

/**
 * Updates the position by adding a random value and ensuring it does not exceed 1.
 * @param {number} position - The current position.
 * @returns {number} - The updated position.
 */
const updatePosition = (position) => Math.min(position + Math.random() / 2, 1);

/**
 * Gets the current route with updated positions.
 * @returns {Positions} - The updated positions.
 */
export const getRoute = () => {
  positions.peopleOnRoute = positions.peopleOnRoute.map((person) => ({
    ...person,
    position: updatePosition(person.position),
  }));
  positions.myPosition = updatePosition(positions.myPosition);

  return positions;
};
