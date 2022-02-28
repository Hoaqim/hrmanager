import React, { Component } from "react";
import CustomModal from "./Modal.js";
import axios from "axios";
import {Row,Col,CardBody, Card,CardText,CardTitle} from 'reactstrap';
import CustomToast from "./Toast.js"
import styles from '../css/employee.css';

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
      modal: false,
      toast: false,
      currentToast:"",
      toastItem:{
        salary:"",
        bank_account:""
      },
      activeItem: {
        name: "", 
        email: "", 
        position:"", 
        salary:"", 
        bank_account:"",
      },
    };
  }

  componentDidMount(){
    this.refreshList();
  }

  refreshList = () =>{
    axios
    .get('api/employees/')
    .then((res) => this.setState({employeeList: res.data}))
    .catch((err) => console.log(err));
  }

  toggle=() => {
    this.setState({modal:!this.state.modal})
  }
  
  toggleToast = () =>{
    this.setState({toast:!this.state.toast})
  }

  handleSubmit=(item) => {
    this.toggle();
    if (item.id){
      axios
      .put(`api/employees/${item.id}/`, item)
      .then((res) => this.refreshList());
      return;
    }
    axios
    .post('api/employees/', item)
    .then((res) => this.refreshList());
  }

  handleDelete=(item) =>{
    axios
    .delete(`api/employees/${item.id}`)
    .then((res) => this.refreshList());
  }

  createItem = () => {
    const item = { name: "", email: "", position:"", salary:"", bank_account:"" };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  showInfo = (item) =>{
    this.setState({
      activeItem: item, 
      toast: !this.state.toast,
      currentToast: item.id})
  }
  
  renderItems = () =>{
    const newItems = this.state.employeeList

    return newItems.map((item) => (
    <Col className="item">
      <Card className="item-card bg-info" id={`${this.state.activeItem.id}`} onClick={() => this.showInfo(item)}>
        <CardBody>
          <CardTitle>
            {item.name}
          </CardTitle>
          <CardText>
            position: {item.position} <br/>
            email: {item.email}
          </CardText>
              <button className="btn btn-primary" onClick={() => this.editItem(item)}>
                edit
              </button>
              <button className="btn btn-danger" onClick={() => this.handleDelete(item)}>
                delete
              </button>
        </CardBody>
      </Card>           
      {this.state.toast&&this.state.currentToast===item.id?(
        <CustomToast
          activeItem={this.state.activeItem}
          toggleToast={this.toggleToast}
        />):null}
    </Col>
    
    ))
  }

  render(){
    return(
      <div className="container">
        <h1>List of employees</h1>
          <div className="button">
            <button className="btn btn-dark" onClick={this.createItem}>
              Add employee
            </button>
          </div>

            <Row xs="4">  
              {this.renderItems()}
            </Row>



        {this.state.modal?(
        <CustomModal 
        activeItem={this.state.activeItem}
        toggle={this.toggle}
        onSave={this.handleSubmit}
        />):null}
        
      </div>
    )
  }



}