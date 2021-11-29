import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPet } from "../../redux/actions";
import Styles from "./CreateDog.module.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const CreateDog = ({ dog }) => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breeds);

  const [values, setValues] = useState({
    name: null,
    gender: null,
    exact: null,
    birthday: null,
    breed: null,
  });

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(null);

  var getDaysArray = function (start, end) {
    for (var arr = [], dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    var daylist = getDaysArray(new Date(start), new Date(end));
    setStartDate(start);
    setEndDate(end);
    setValues({
      ...values,
      birthday: daylist,
    });
  };

  const handleOnChange = ({ target: { name, value } }) =>
    setValues({
      ...values,
      [name]: value,
    });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log("Values:", values);
    dispatch(createPet(values));
    setValues({
      name: null,
      gender: null,
      exact: null,
      birthday: null,
      breed: null,
    });
    alert("Pet created successfully");
  };

  return (
    <form className={Styles.cnt} onSubmit={handleOnSubmit}>
      <div className={Styles.card}>
        <label>Name</label>
        <input
          className={Styles.input}
          name="name"
          onChange={handleOnChange}
          type="text"
          value={values.name}
          placeholder="Name"
          required
        />
        <label htmlFor="">Gender</label>
        <select
          className={Styles.select}
          name="gender"
          value={values.gender}
          onChange={handleOnChange}
          id=""
        >
          <option value="">-</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label htmlFor="">Exact Birthday</label>
        <select
          className={Styles.select}
          name="exact"
          value={values.exact}
          onChange={handleOnChange}
          id=""
        >
          <option value="">-</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label htmlFor="">birthday</label>

        {values.exact === "true" ? (
          <DatePicker
            className={Styles.input}
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setValues({
                ...values,
                birthday: date,
              });
            }}
            isClearable
            placeholderText="Choose Birthday"
          />
        ) : (
          <DatePicker
            className={Styles.input}
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            isClearable
            placeholderText="Choose Birthday"
          />
        )}

        <div>
          <label htmlFor="">Breed:</label>
          <br />
          <select
            // className={Styles.select}
            name="breed"
            onChange={handleOnChange}
            value={values.breed}
            required
          >
            <option value="">-</option>
            {breeds.map((e) => (
              <option key={e.id} value={e.name}>
                {" "}
                {e.name}{" "}
              </option>
            ))}
          </select>
        </div>
        <button className={Styles.button} id="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateDog;
