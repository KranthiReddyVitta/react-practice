import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import classNames from "./MultiSelect.module.css";
import MultiSelectPanel from "./MultiSelectPanel";

const MultiSelect = (props) => {
  const { items } = props;
  const [select, changeSelected] = useState(props.selected);
  const [isPanelShown, setIsPanel] = useState(false);
  const [newArr, setNew] = useState([]);
  const selectStatus = useCallback(
    (value) => {
      if (value && select && select.length) {
        const index = select.indexOf(value.id);
        return index !== -1 ? true : false;
      }
      return false;
    },
    [select]
  );
  useEffect(() => {
    let newItems = [];
    newItems = [
      ...items.map((value) => {
        const obj = {
          isChecked: selectStatus(value) ? true : false,
        };
        return { ...value, ...obj };
      }),
    ];
    setNew(newItems);
  }, [select, items, selectStatus]);

  /**
   * @method Panel Toggler
   * @author Kranthi Kumar Reddy
   */
  const panelHandler = () => {
    setIsPanel((state) => !state);
  };

  /**
   * @author Kranthi Kumar Reddy
   * @method Change Selected Elements
   * @param {*} id
   */
  const changeHandler = (id) => {
    const index =
      select && select.length ? select.findIndex((value) => value === id) : -1;
    if (index !== -1) {
      const arr = select.slice();
      arr.splice(index, 1);
      changeSelected(arr);
      updateModel(arr);
    } else {
      const arr = select.slice();
      arr.push(id);
      changeSelected(arr);
      updateModel(arr);
    }
  };

  /**
   * @author Kranthi Kumar Reddy
   * @method To show selected Items
   * @return {*}
   */
  const constructChips = () => {
    let arr = [];
    select.forEach((value) => {
      const obj = newArr.find((data) => data.id === value);
      if (obj) {
        arr.push(obj);
      }
    });
    if (arr && arr.length) {
      return arr.map((val) => {
        return (
          <span key={val.id} className={classNames.chip}>
            {val.name}
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={classNames.chipIcon}
              onClick={changeHandler.bind(null, val.id)}
            />
          </span>
        );
      });
    }
    return <span>No Items Selected</span>;
  };
  const content = constructChips();

  const updateModel = (arr) => {
    props.onChangeSelection(arr);
  };

  return (
    <Fragment>
      <div className={classNames.multiselect}>
        <div className={classNames.placeholder}>
          {isPanelShown ? content : props.placeholder}
        </div>
        <div className={classNames.trigger} onClick={panelHandler}>
          <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>
      </div>
      {isPanelShown && (
        <MultiSelectPanel items={newArr} onChange={changeHandler} />
      )}
    </Fragment>
  );
};

export default MultiSelect;
