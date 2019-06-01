import React, {Component} from 'react';
import "../../StaticFiles/css/CompleteReport.css"
  

export default class extends Component{
    

    handleSubmit=(e)=>{
        e.preventDefault();
        let formData ={
            branch:this.branch.value,
            fromDate:this.fromDate.value,
            toDate:this.toDate.value
        }
        console.log('complete report=',formData)
    }
    render(){
        return(
            <section  className="CompleteReport">

                <section className="CompleteReport-detailCustomer">
                <div><span>امتیاز کل</span><span>50000</span></div>
                <div><span>   شرکت در قرعه کشی ماهیانه</span><span>yes/no</span></div>
                <div><span>   شرکت در قرعه کشی سالیانه</span><span>yes/no</span></div>              
                </section>
                <hr/>

                <section className="CompleteReport-filterResult">
                    <form onSubmit={this.handleSubmit}>
                    <h3>جستجو</h3>
                        <div className="form-group">
                            <label htmlFor="branch">شعبه</label>
                            <input type="text" id="branch" className="form-control" ref={(input)=>{this.branch=input}}/>
                        </div>
                        <div className="form-group">
                            <span>تاریخ</span>
                            <label htmlFor="fromDate">از</label>
                            <input type="text" id="fromDate"  className="form-control"  ref={(input)=>{this.fromDate=input}}/>
                        </div>
                        <div className="form-group">
                             
                            <label htmlFor="toDate">تا</label>
                            <input type="text" id="toDate"  className="form-control"  ref={(input)=>{this.toDate=input}}/>
                        </div>
                        <button type="submit">بگرد</button>


                    </form>
                   

                </section>  {/* end of filter result     */}
                <hr/>
                <br/>

                <table className="CompleteReport-table">
                    <tr>
                    <th> #</th>
                    <th>کالا </th>
                    <th>   تاریخ</th>
                    <th> مبلغ خرید</th>
                    <th> شعبه  </th>
                    <th> امتیاز  </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> کالای 1  </td>
                        <td> 1389-9-12  </td>
                        <td>  20000 </td>
                        <td>  شعبه 1 </td>
                        <td> 500  </td>
                    </tr>
                </table>




            </section>
        )
    }
}