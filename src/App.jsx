import { useState } from "react";
import Values from "values.js";
import { Form } from "./Form";
import { ColorList } from "./ColorList";

const App = () => {
  const [colors, setColors] = useState(new Values("#4169e1").all(20));

  // console.log(new Values("#4169e1").all(20));

  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
