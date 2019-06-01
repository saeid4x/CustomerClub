import React, {Component} from 'react';
import DashboardLayout from '../General/DashboardLayout';
import SideNavigation from './SideNavigation';
import "../../StaticFiles/css/CustomerLayout.css"
 

export default class extends Component{
    render(){
        return(
            <section className="CustomerLayout">
                <DashboardLayout/>
                <SideNavigation/>
                <section className="CustomerLayout-content">
                    <div><span>all points:</span><span>null</span></div>
                    <div><span>number all buy:</span><span>null</span></div>
                    <div><span>price all kharid:</span><span>null</span></div>
                    <hr/>
                    <div><span>number kharid this month:</span><span>null</span></div>
                    <div><span>price kharid in month:</span><span>null</span></div>

                </section>

                
            </section>
        )
    }
}