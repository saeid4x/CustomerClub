import React, {Component} from 'react';
 import "../../StaticFiles/css/SideNavigation.css";

export default class extends Component{
    render(){
        return(
            <section className="SideNavigation">
                <section className="customerSideNav-avatar">
                    <img src="/static/img/img.png" alt=""/>
                    <br/>
                    <span className="customerSideNav-avatar-username">username</span><br/>
                    <span className="customerSideNav-avatar-typeUser">type user</span>
                </section>
                <section  className="customerSideNav-category">
                    <ul>
                        <li> <a href="/user/report">گزارش خرید  </a></li>
                        <li> <a href="/user/profile">    پروفایل </a></li>
                    </ul>

                </section>
            </section>
        )
    }
}