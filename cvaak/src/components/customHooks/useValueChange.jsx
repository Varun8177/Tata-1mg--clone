const { useState } = require("react");

function useValueChange(val) {
  const [name, setname] = useState(val || "");
  const handleChange = (val) => {
    setname(val);
  };
  return [name, handleChange];
}

export default useValueChange;
