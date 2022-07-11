import { Fragment, useState } from "react";
import MultiSelect from "../components/multiselect/MultiSelect";

const MultiselectDemo = () => {
  const [selected, updateSelection] = useState([]);
  const items = [
    { id: 1, name: "New York", code: "NY" },
    { id: 2, name: "Rome", code: "RM" },
    { id: 3, name: "London", code: "LDN" },
    { id: 4, name: "Istanbul", code: "IST" },
    { id: 5, name: "Paris", code: "PRS" },
    { id: 6, name: "London", code: "LDN" },
    { id: 7, name: "Istanbul", code: "IST" },
    { id: 8, name: "Paris", code: "PRS" },
  ];

  const changeSelection = (value) => {
    updateSelection(value);
  };

  return (
    <Fragment>
      <MultiSelect
        placeholder="Select elements"
        items={items}
        selected={selected}
        onChangeSelection={changeSelection}
      />
    </Fragment>
  );
};

export default MultiselectDemo;
