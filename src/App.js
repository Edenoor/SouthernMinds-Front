import "./App.css";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { useEffect } from "react";
import { getAllBreeds } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBreeds());
  }, [dispatch]);
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
