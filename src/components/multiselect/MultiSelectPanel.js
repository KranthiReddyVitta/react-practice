//import { Fragment } from "react";
import MultiSelectItem from "./MultiSelectItem";
import classNames from "./MultiSelectPanel.module.css";

const MultiSelectPanel = (props) => {
  const { items } = props;
  const onChange = (id) => {
    props.onChange(id);
  };

  return (
    <ul className={classNames.multiSelectPanel}>
      {items.map((value) => {
        return (
          <MultiSelectItem
            key={value.id}
            isChecked={value.isChecked}
            name={value.name}
            onChangeHandler={onChange.bind(null, value.id)}
            id={value.id}
          />
        );
      })}
    </ul>
  );
};

export default MultiSelectPanel;
