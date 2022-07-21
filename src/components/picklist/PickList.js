import { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faArrowRightFromBracket,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "./PickList.module.css";

const PickList = (props) => {
  const data = props.data;
  const selected = props.input;
  const [selectedLeftArray, setSelectedLeftArray] = useState([]);
  const [filterArray, setFilteredArray] = useState(data);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRightArray, setSelectedRightArray] = useState([]);

  useEffect(() => {
    let propsData = [...props.input];
    let selected = [...props.data];
    let rightList = [];
    propsData.forEach((id) => {
      const indexItem = selected.find((val) => val.id === id);
      rightList.push(indexItem);
      selected = selected.filter((item) => item.id !== id);
    });
    setSelectedItems(rightList);
    setFilteredArray(selected);
  }, [data, selected]);

  const selectLeftItem = (item) => {
    if (selectedLeftArray && selectedLeftArray.length) {
      if (item.id && selectedLeftArray.indexOf(item.id) === -1) {
        const arr = [...selectedLeftArray];
        arr.push(item.id);
        setSelectedLeftArray(arr);
      } else {
        const index = selectedLeftArray.indexOf(item.id);
        const arr = [...selectedLeftArray];
        arr.splice(index, 1);
        setSelectedLeftArray(arr);
      }
    } else {
      const arr = [...selectedLeftArray];
      arr.push(item.id);
      setSelectedLeftArray(arr);
    }
  };

  const selectRightItem = (item) => {
    if (selectedRightArray && selectedRightArray.length) {
      if (item.id && selectedRightArray.indexOf(item.id) === -1) {
        const arr = [...selectedRightArray];
        arr.push(item.id);
        setSelectedRightArray(arr);
      } else {
        const index = selectedRightArray.indexOf(item.id);
        const arr = [...selectedRightArray];
        arr.splice(index, 1);
        setSelectedRightArray(arr);
      }
    } else {
      const arr = [...selectedRightArray];
      arr.push(item.id);
      setSelectedRightArray(arr);
    }
  };

  const moveIndividualRight = () => {
    const selectedLeft = [...selectedLeftArray];
    let leftArray = [...filterArray];
    let right = [...selectedItems];
    selectedLeft.forEach((val) => {
      const indexItem = leftArray.find((item) => item.id === val);
      right.push(indexItem);
      leftArray = leftArray.filter((item) => item.id !== val);
    });
    setSelectedItems(right);
    setFilteredArray(leftArray);
    setSelectedLeftArray([]);
  };

  const moveIndividualLeft = () => {
    const selectedLeft = [...selectedRightArray];
    let rightArray = [...selectedItems];
    let left = [...filterArray];
    selectedLeft.forEach((val) => {
      const indexItem = rightArray.find((item) => item.id === val);
      const originalIndex = data.findIndex((item) => item.id === indexItem.id);
      left.splice(originalIndex, 0, indexItem);
      rightArray = rightArray.filter((item) => item.id !== val);
    });
    setFilteredArray(left);
    setSelectedItems(rightArray);
    setSelectedRightArray([]);
  };

  const moveAllRight = () => {
    let leftArray = [...filterArray];
    let rightArray = [];
    if (selectedItems && selectedItems.length) {
      rightArray = [...selectedItems, ...leftArray];
    } else {
      rightArray = [...leftArray];
    }
    setSelectedItems(rightArray);
    setFilteredArray([]);
    setSelectedLeftArray([]);
  };

  const moveAllLeft = () => {
    let rightArray = [...selectedItems];
    let leftArray = [];
    if (filterArray && filterArray.length) {
      leftArray = [...filterArray, ...rightArray];
    } else {
      leftArray = [...rightArray];
    }
    setFilteredArray(leftArray);
    setSelectedItems([]);
    setSelectedRightArray([]);
  };

  const getSelectedClasses = (item) => {
    if (
      selectedLeftArray &&
      selectedLeftArray.length &&
      selectedLeftArray.indexOf(item.id) !== -1
    )
      return `${classNames.listItem} ${classNames.selected}`;
    return `${classNames.listItem}`;
  };

  const getSelectedClassesRight = (item) => {
    if (
      selectedRightArray &&
      selectedRightArray.length &&
      selectedRightArray.indexOf(item.id) !== -1
    )
      return `${classNames.listItem} ${classNames.selected}`;
    return `${classNames.listItem}`;
  };

  const generateLeftList = () => {
    return (
      <ul className={classNames.orderList}>
        {filterArray.map((item) => {
          const className = getSelectedClasses(item);
          return (
            <li
              className={className}
              onClick={selectLeftItem.bind(null, item)}
              key={item.id}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    );
  };

  const generateRightList = () => {
    return (
      <ul className={classNames.orderList}>
        {selectedItems.map((item) => {
          const className = getSelectedClassesRight(item);
          return (
            <li
              className={className}
              onClick={selectRightItem.bind(null, item)}
              key={item.id}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    );
  };

  const mainList = generateLeftList();
  const rightList = generateRightList();
  const isIndividualRightDisabled =
    selectedLeftArray && selectedLeftArray.length ? false : true;
  const isAllRightDisabled = filterArray && filterArray.length ? false : true;
  const isAllLeftDisabled =
    selectedItems && selectedItems.length ? false : true;
  const isIndividualLeftDisabled =
    selectedRightArray && selectedRightArray.length ? false : true;

  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs={5} className={classNames.listing}>
            {mainList}
          </Col>
          <Col xs={1} className={classNames.buttons}>
            <div className={classNames.actions}>
              <Button
                className={classNames.button}
                onClick={moveIndividualRight}
                disabled={isIndividualRightDisabled}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
              <Button
                className={classNames.button}
                onClick={moveAllRight}
                disabled={isAllRightDisabled}
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </Button>
              <Button
                className={classNames.button}
                onClick={moveIndividualLeft}
                disabled={isIndividualLeftDisabled}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button
                className={classNames.button}
                disabled={isAllLeftDisabled}
                onClick={moveAllLeft}
              >
                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              </Button>
            </div>
          </Col>
          <Col xs={5} className={classNames.listing}>
            {rightList}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default PickList;
