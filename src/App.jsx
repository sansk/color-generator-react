import { useState } from "react";
import Values from "values.js";
import { Form } from "./Form";
import { ColorList } from "./ColorList";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#4169e1").all(20));

  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(20);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
