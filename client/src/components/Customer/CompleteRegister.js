import React , {Component} from 'react';

export default class extends Component{


    handleSubmit=(e)=>{
        e.preventDefault();
        let formData={
            username:this.username.value,
            password:this.password.value,
            passwordConfirm:this.passwordConfirm.value,
            email:this.email.value
        }
        console.log('form data=',formData)
    }
    render(){
        return(
            <section className="completeRegister">
                <section className="container">
                    <h2>تکمیل ثبت نام </h2><br/><br/>
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="username">نام کاربری</label>
                            <input type="text" className="form-control" id="username" placeholder="username" ref={(input)=>{this.username=input}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">کلمه عبور</label>
                            <input type="password" className="form-control" id="password" ref={(input)=>{this.password=input}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordConfirm"> تکرار کلمه عبور </label>
                            <input type="password" className="form-control" id="passwordConfirm" ref={(input)=>{this.passwordConfirm=input}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"> ایمیل</label>
                            <input type="email" className="form-control" id="email" placeholder="email" ref={(input)=>{this.email=input}}/>
                        </div>

                        <button type="submit"> submit</button>


                    </form>
                </section>


            </section>
        )

    }
}