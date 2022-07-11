import "./MultiSelectItem.module.css";
const MultiSelectItem = (props) => {
  return (
    <>
      <li>
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          checked={props.isChecked}
          onChange={props.onChangeHandler}
        />
        <label htmlFor={props.id}> {props.name}</label>
      </li>
    </>
  );
};

export default MultiSelectItem;
