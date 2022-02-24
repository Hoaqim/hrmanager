import React, { Component } from "react";
import CustomModal from "./Modal.js";
import axios from "axios";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
      modal: false,
      activeItem: {
        name: "",
        position: "",
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
  
  handleSubmit=(item) => {
    this.toggle();
    if (item.id){
      axios
      .put(`api/employees/${item.id}`, item)
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
    const item = { name: "", email: "", position:"", salary:"", employed_date:"", project:"" };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };


  renderItems = () =>{
    const newItems = this.state.employeeList

    return newItems.map((item) => (
      <li className="item-id"
      key={item.id}
      >
        <span 
        className="item-name"
        title={item.name}
        >
        {item.email}
        </span>
        <span>
          <button onClick={() => this.editItem(item)}>
            edit
          </button>
          <button className="btn brn-secondary" onClick={() => this.handleDelete(item)}>
            delete
          </button>
        </span>
      </li>
    ))
  }

  render(){
    return(
      <div className="container">
        <h1>List of employees</h1>
          <div className="button">
            <button className="btn btn-primary" onClick={this.createItem}>
              Add employee
            </button>
          </div>
        <div className="Items">
          {this.renderItems()}
        </div>
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