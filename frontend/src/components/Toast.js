import React, { Component } from 'react';
import {Toast,ToastHeader,ToastBody} from 'reactstrap';

export default class customToast extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem,
        };
      }

    render() {
    const toggleToast = this.props;
    
    return (
          <Toast isOpen={true} toggle={toggleToast} id={`${this.state.activeItem.id}`}>
        <ToastHeader toggle={function toggleToast(){}}>
            details
        </ToastHeader>
        <ToastBody>
            salary: {this.state.activeItem.salary} <br />
            bank account: {this.state.activeItem.bank_account} <br />
        </ToastBody>
    </Toast>
    )
  }
}
