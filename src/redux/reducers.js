import {
  GET_ALL_PETS,
  CREATE_PET,
  UNMOUNT_ALL_PETS,
  GET_ALL_BREEDS,
} from "./actions";

const initialState = {
  pets: [],
  allPets: [],
  breeds: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PETS:
      return {
        ...state,
        pets: action.payload,
        allPets: action.payload,
      };

    case CREATE_PET:
      return {
        ...state,

        pets: state.pets.concat(action.payload),
      };
    case UNMOUNT_ALL_PETS:
      return {
        ...state,
        pets: [],
      };
    case GET_ALL_BREEDS:
      return {
        ...state,
        breeds: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
