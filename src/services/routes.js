/**
 * @typedef {Object} Person
 * @property {string} name - The name of the person.
 * @property {number} position - The current position of the person.
 */

/**
 * @typedef {Object} Route
 * @property {number} id - The name of the route.
 * @property {string} routeName - The name of the route.
 * @property {number} myPosition - The current position of the user.
 * @property {Person[]} peopleOnRoute - The list of people on the route.
 */

/**
 * @typedef {Object} RoutePositions
 * @property {number} myPosition - The current position of the user.
 * @property {number[]} peopleOnRoute - The list of people on the route.
 */

/** @type {Route[]} */
const routes = [
  {
    id: 1,
    routeName: "To the dunes and back",
    myPosition: 0,
    peopleOnRoute: [
      { name: "Lex", position: 0 },
      { name: "Frikkie", position: 0 },
      { name: "Ronald", position: 0 },
    ],
  },
  {
    id: 2,
    routeName: "Rocky mountains",
    myPosition: 0,
    peopleOnRoute: [
      { name: "Lex", position: 0 },
      { name: "Frikkie", position: 0 },
      { name: "Ronald", position: 0 },
    ],
  },
  {
    id: 3,
    routeName: "Transfagarasan",
    myPosition: 0,
    peopleOnRoute: [
      { name: "Lex", position: 0 },
      { name: "Frikkie", position: 0 },
      { name: "Ronald", position: 0 },
    ],
  },
  {
    id: 4,
    routeName: "Quick tour of the Moon",
    myPosition: 0,
    peopleOnRoute: [
      { name: "Lex", position: 0 },
      { name: "Frikkie", position: 0 },
      { name: "Ronald", position: 0 },
    ],
  },
];

/**
 * Updates the position by adding a random value and ensuring it does not exceed 1.
 * @param {number} position - The current position.
 * @returns {number} - The updated position.
 */
const updatePosition = (position) => Math.min(position + Math.random() / 2, 1);

/**
 * Gets the list of route identifiers.
 * @returns {number[]} - The list of route identifiers.
 */
export const getRoutes = () => routes.map((route) => ({ id: route.id }));

/**
 * Gets the name of the route.
 * @param {number} id - The route identifier.
 * @returns {string} - The name of the route.
 */
export const getRouteName = (id) => {
  const result = routes.filter((route) => route.id === id)[0];
  return result.routeName;
};

/**
 * Gets the current positions of the user and people on the route.
 * @param {number} id - The route identifier.
 * @returns {RoutePositions} - The current positions.
 */
export const getPositions = (id) => {
  const result = routes.filter((route) => route.id === id)[0];

  return {
    myPosition: result.myPosition,
    peopleOnRoute: result.peopleOnRoute.map((person) => person.position),
  };
};

/**
 * Gets the current route with updated positions.
 * @returns {Route} - The updated positions.
 */
export const getRoute = (id) => {
  const result = routes.filter((route) => route.id === id)[0];

  result.peopleOnRoute = result.peopleOnRoute.map((person) => ({
    ...person,
    position: updatePosition(person.position),
  }));
  result.myPosition = updatePosition(result.myPosition);

  return result;
};
