import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Employee</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="employee-name">Name</Label>
              <Input
                type="text"
                id="employee-name"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter employee's name"
              />
            </FormGroup>

            <FormGroup>
              <Label for="employee-email">Email</Label>
              <Input
                type="text"
                id="employee-email"
                name="email"
                value={this.state.activeItem.email}
                onChange={this.handleChange}
                placeholder="Enter employee's email"
              />
            </FormGroup>

            <FormGroup>
              <Label for="employee-position">Position</Label>
              <Input
                type="text"
                id="employee-position"
                name="position"
                value={this.state.activeItem.position}
                onChange={this.handleChange}
                placeholder="Enter employee's position"
              />
            </FormGroup>

            <FormGroup>
              <Label for="employee-salary">Salary</Label>
              <Input
                type="text"
                id="employee-salary"
                name="salary"
                value={this.state.activeItem.salary}
                onChange={this.handleChange}
                placeholder="Enter employee's salary"
              />
            </FormGroup>

            <FormGroup>
              <Label for="employee-account">Bank account</Label>
              <Input
                type="text"
                id="employee-account"
                name="bank_account"
                value={this.state.activeItem.bank_account}
                onChange={this.handleChange}
                placeholder="Enter employee's bank account"
              />
            </FormGroup>
          </Form>
          <ModalFooter>
            <Button
              className="btn-save"
              onClick={() => onSave(this.state.activeItem)}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    );
  }
}
