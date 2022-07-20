import { Fragment, useState } from "react";
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
  const [selectedLeftArray, setSelectedLeftArray] = useState([]);
  const [filterArray, setFilteredArray] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRightArray, setSelectedRightArray] = useState([]);

  const data = Array.from({ length: 10 }).map((item, index) => {
    return { id: index + 1, name: `Item ${index}` };
  });

  const selectLeftItem = (item) => {
    if (selectedLeftArray && selectedLeftArray.length) {
      if (item.id && selectedLeftArray.indexOf(item.id) !== -1) {
        const arr = [...selectedLeftArray];
        arr.push(item.id);
        setSelectedLeftArray(arr);
      } else {
        const arr = [...selectedLeftArray].push(item.id);
        setSelectedLeftArray(arr);
      }
    } else {
      const arr = [...selectedLeftArray];
      arr.push(item.id);
      setSelectedLeftArray(arr);
    }
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

  const generateList = () => {
    console.log("Render generateList");
    return (
      <ul className={classNames.orderList}>
        {data.map((item) => {
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

  const mainList = generateList();

  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs={5} className={classNames.listing}>
            {mainList}
          </Col>
          <Col xs={1} className={classNames.buttons}>
            <div className={classNames.actions}>
              <Button className={classNames.button}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
              <Button className={classNames.button}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </Button>
              <Button className={classNames.button}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button className={classNames.button}>
                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              </Button>
            </div>
          </Col>
          <Col xs={5} className={classNames.listing}>
            <ul className={classNames.orderList}>
              {data.map((item) => {
                return (
                  <li className={classNames.listItem} key={item.id}>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default PickList;
