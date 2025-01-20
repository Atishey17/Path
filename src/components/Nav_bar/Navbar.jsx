import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { BiSolidBomb, BiMap } from "react-icons/bi";
import { FaWeightHanging } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { Context } from "../Contex/Context";

export default function Navbar(props) {
  const [
    Algorithm,
    setAlgorithm,
    Visualize,
    setVisualize,
    clear,
    setClear,
    cursor,
    setCursor,
  ] = useContext(Context);

  React.useEffect(() => {
    setAlgorithm("Dijkstra");
  }, [setAlgorithm]);

  const changeCursortoWeight = () => {
    setCursor((prevState) => {
      if (prevState === "Cursor") {
        return "weightCursor";
      }
      return "Cursor";
    });
  };
  const changeCursortoBomb = () => {
    setCursor((prevState) => {
      if (prevState === "Cursor") {
        return "bombCursor";
      }
      return "Cursor";
    });
  };

  return (
    <div className="navb shadow-xl ">
      <img src={logo} alt="logo" className="img" />
      <h2 className="algorithm-text">Dijkstra Algorithm</h2>
      <button className="btn go " onClick={() => setVisualize(true)}>
        Visualize {Algorithm}
      </button>
      <button className="btn stop" onClick={() => setClear(true)}>
        Clear
      </button>
      <div className="symbols">
        <BiMap className="icon" />
        <h1>Start</h1>
        <GoGoal className="icon" />
        <h1>End</h1>
        <BiSolidBomb className="node wall" />
        <h1>Wall</h1>
        <FaWeightHanging className="icon" />
        <h1>Weight</h1>
        <BiSolidBomb className="node unvisited" />
        <h1>Unvisited</h1>
        <BiSolidBomb className="node visited" />
        <h1>Visited</h1>
        <BiSolidBomb className="node path" />
        <h1>Shortest Path</h1>
      </div>
    </div>
  );
}
