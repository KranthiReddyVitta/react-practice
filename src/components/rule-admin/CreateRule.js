import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "./CreateRule.module.css";
import MultiSelect from "../multiselect/MultiSelect";
import { Formik, Form, Field } from "formik";

const CreateRule = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const [selected, updateSelection] = useState([]);
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

  const initialValues = {
    ruleName: "",
    ruleType: "",
    ruleProcess: "",
    ruleCategory: "",
    ruleSection: "",
    severityScore: "",
    material: "",
    altId: "",
    rulePoints: "",
    ruleDate: "",
    hardStop: "",
    loeDate: "",
    ruleDescription: "",
    rejection: "",
    display: [],
  };

  const onSubmit = (values) => {
    console.log("values", values);
  };

//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//   });

//   const changeSelection = (value) => {
//     updateSelection(value);
//   };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Rule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(props) => {
              return (
                <Form>
                  <Container>
                    <Row>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="ruleName">Rule Name</label>
                          <Field id="ruleName" type="text" name="ruleName" />
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="ruleType">Rule Type</label>
                          <Field
                            id="ruleType"
                            as="select"
                            name="ruleType"
                            placeholder="Rule Type"
                          >
                            <option value=""></option>
                            <option value="Sample">Sample</option>
                          </Field>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="ruleProcess">Rule Process</label>
                          <Field
                            id="ruleProcess"
                            as="select"
                            name="ruleProcess"
                            placeholder="Rule Process"
                          >
                            <option value=""></option>
                            <option value="Sample">Sample</option>
                          </Field>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="ruleCategory">Rule category</label>
                          <Field
                            id="ruleCategory"
                            as="select"
                            name="ruleCategory"
                            placeholder="Rule Category"
                          >
                            <option value=""></option>
                            <option value="Sample">Sample</option>
                          </Field>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="ruleSection">Report Section</label>
                          <Field
                            id="ruleSection"
                            as="select"
                            name="ruleSection"
                            placeholder="Rule Section"
                          >
                            <option value=""></option>
                            <option value="Sample">Sample</option>
                          </Field>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="severityScore">Severity Score</label>
                          <Field
                            id="severityScore"
                            as="select"
                            name="severityScore"
                            placeholder="Severity Score"
                          >
                            <option value=""></option>
                            <option value="Sample">Sample</option>
                          </Field>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="material">Material/Technical</label>
                          <Field
                            htmlFor="material"
                            as="select"
                            name="material"
                            placeholder="Material/Technical"
                          >
                            <option value=""></option>
                            <option value="Sample">Sample</option>
                          </Field>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="altId ">Alt Rule Id</label>
                          <Field id="altId" type="text" name="altId" />
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="rulePoints">Rule Points</label>
                          <Field
                            id="rulePoints"
                            type="text"
                            name="rulePoints"
                          ></Field>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="display">Display To</label>
                          <MultiSelect
                            placeholder="Select elements"
                            items={items}
                            selected={initialValues.display}
                            onChangeSelection={(val) => {
                              props.setFieldValue("display", val);
                            }}
                          />
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="ruleDate">Rule Effective Date</label>
                          <Field id="ruleDate" name="ruleDate">
                            {({
                              field, // { name, value, onChange, onBlur }
                              form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                              meta,
                            }) => (
                              <div>
                                <input
                                  type="date"
                                  {...form.getFieldProps("ruleDate")}
                                />
                                {meta.touched && meta.error && (
                                  <div className="error">{meta.error}</div>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="hardStop">Hard Stop Code</label>
                          <Field as="select" id="hardStop" name="hardStop">
                            <option value=""></option>
                            <option value="Sample">Sample</option>
                          </Field>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="loeDate">Loe Effective Date</label>
                          <Field name="loeDate">
                            {({
                              field,
                              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                              meta,
                            }) => (
                              <div>
                                <input type="date" id="loeDate" {...field} />
                                {meta.touched && meta.error && (
                                  <div className="error">{meta.error}</div>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>
                      </Col>
                      <Col xs={12} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="ruleDescription">
                            Rule Description
                          </label>
                          <Field
                            id="ruleDescription"
                            as="textarea"
                            name="ruleDescription"
                          ></Field>
                        </div>
                      </Col>
                      <Col xs={12} className="mb-3">
                        <div className={classNames.form__control}>
                          <label htmlFor="rejection">Rejection Verbiage</label>
                          <Field
                            id="rejection"
                            as="textarea"
                            name="rejection"
                          ></Field>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      onClick={handleClose}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateRule;
