import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAllPets, unmountAllPets } from "../redux/actions";
// import styles from './Home.module.css'
import DogCard from "./DogCard";
import Pagination from "./Pagination";
import styles from "./Dog.module.css";

// import { Carousel } from "react-responsive-carousel";

const Dogs = () => {
  const query = new URLSearchParams(useLocation().search.slice(1));
  const dispatch = useDispatch();
  const { pets } = useSelector((state) => state);
  const name = query.get("name");
  const from = parseInt(query.get("from")) || 0;

  useEffect(() => {
    name ? dispatch(getAllPets(name)) : dispatch(getAllPets());
    return () => {
      dispatch(unmountAllPets());
    };
  }, [dispatch, name]);

  const dogComponent = () => (
    <div className={styles.cnt}>
      {pets && (
        <div className={styles.cont}>
          <h4 className={styles.pag}>
            <Pagination dogs={pets} />
          </h4>
          <div className={styles.one}>
            {/* <Carousel autoPlay> */}

            {pets.slice(from, from + 14).map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
            {/* </Carousel> */}
          </div>
          <h4>
            <Pagination dogs={pets} />
          </h4>
        </div>
      )}
    </div>
  );
  return pets.length ? dogComponent() : <div>Cargando...</div>;
};
export default Dogs;
