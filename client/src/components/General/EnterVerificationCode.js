import React , {Component} from 'react';

export default class extends Component{


    handleSubmit=(e)=>{
        e.preventDefault();
        let verifCode=this.verifCode.value

    }

    render(){
        return(
            <section className="EnterVerifCode">
                <section className="container">
                    <form action="" onSubmit={this.handleSubmit}>
                    <h1>کد تایید </h1>
                    <input type="text" ref={(input)=>{this.verifCode=input}} />
                    <br/>
                    <button type="submit" className="btn btn-success">تایید</button>
                    <br/>
                    </form>
                  
                    <a href="#">ارسال مجدد کد</a><br/>
                    <a href="#"> اصلاح شماره</a>


                </section>
            </section>
        )
    }
}