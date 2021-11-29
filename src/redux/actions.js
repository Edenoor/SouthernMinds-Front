import axios from "axios";

export const GET_ALL_PETS = "GET_ALL_PETS";
export const CREATE_PET = "CREATE_PET";
export const UNMOUNT_ALL_PETS = "UNMOUNT_ALL_PETS";
export const GET_ALL_BREEDS = "GET_ALL_BREEDS";

export const getAllPets = (name) => (dispatch) => {
  try {
    if (name) {
      return axios
        .get(`/pets?name=${name}`)
        .then((res) => dispatch({ type: GET_ALL_PETS, payload: res.data }));
    }
    return axios
      .get("/pets")
      .then((res) => dispatch({ type: GET_ALL_PETS, payload: res.data }));
  } catch (e) {
    console.log(e);
  }
};

export const createPet = (values) => (dispatch) => {
  try {
    return axios
      .post("pets", { ...values })
      .then((res) => dispatch({ type: CREATE_PET, payload: res.data }));
  } catch (e) {
    console.log(e);
  }
};

export const getAllBreeds = () => (dispatch) => {
  try {
    return axios
      .get("/breeds")
      .then((res) => dispatch({ type: GET_ALL_BREEDS, payload: res.data }));
  } catch (e) {
    console.log(e);
  }
};

export const unmountAllPets = () => ({ type: UNMOUNT_ALL_PETS });
