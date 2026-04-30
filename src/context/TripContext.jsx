import { createContext, useReducer } from "react";

export const TripContext = createContext();

function tripReducer(state, action) {
  switch (action.type) {
    case "SAVE_TRIP":
      return [...state, action.payload];

    case "REMOVE_TRIP":
      return state.filter((trip) => trip.id !== action.payload);

    case "CLEAR_ALL":
      return [];

    default:
      return state;
  }
}

export function TripProvider({ children }) {
  const [savedTrips, dispatch] = useReducer(tripReducer, []);

  return (
    <TripContext.Provider value={{ savedTrips, dispatch }}>
      {children}
    </TripContext.Provider>
  );
}