import styles from "./Converter.module.css";
import { useState } from "react";

// функция конвертирования
function convertColor(color) {
  /* Check for # infront of the value, if it's there, strip it */
  if (color.substring(0, 1) === "#") {
    color = color.substring(1);
  }

  let rgbColor = {};
  /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
  rgbColor.r = parseInt(color.substring(0, 2), 16);
  rgbColor.g = parseInt(color.substring(2, 4), 16);
  rgbColor.b = parseInt(color.substring(4), 16);

  let result = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
  return result;
}

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
