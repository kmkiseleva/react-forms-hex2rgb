import styles from "./Converter.module.css";
import { useState } from "react";
import convertColor from "../../utils/convertColor";

const Converter = () => {
  const [hexInput, setHexInput] = useState("");
  const [rgbOutput, setRgbOutput] = useState("rgb(112, 19, 40)");

  const onChangeColorHandler = (e) => {
    const { value } = e.target;
    setHexInput(value);
    let result = "rgb(..., ..., ...)";
    if (value.length === 7) {
      result = convertColor(value) || "Error!";
    } else if (value.length > 7) {
      result = "Error!";
    }
    setRgbOutput(result);
  };

  const backgroundColorClass = {
    backgroundColor: rgbOutput !== "Error!" ? rgbOutput : "grey",
  };

  return (
    <div className={styles.wrapper} style={backgroundColorClass}>
      <div className={styles.converter}>
        <h1>Color-converter</h1>
        <input type="text" onChange={onChangeColorHandler} value={hexInput} />
        <div className={styles["rgb-field"]}>{rgbOutput}</div>
      </div>
    </div>
  );
};

export default Converter;
