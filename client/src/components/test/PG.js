import React,{Component } from 'react';
import Register from '../General/Register';
import VeriCode from '../General/EnterVerificationCode';
import CompleteRegister from '../Customer/CompleteRegister';
import DashboardLayout from '../General/DashboardLayout';
import CustomerLayout from '../Customer/CustomerLayout';
import CompleteReport from '../Customer/CompleteReport';

export default class extends Component{
    render(){
        return(
            <section className="Pg">
       {/* <CustomerLayout/> */}
       <CompleteReport/>
            </section>
        )
    }
}