import React from 'react';
import './TimeOff.css'
class TimeOff extends React.Component{
    constructor(){
        super();
        this.state={
            date:new Date(),
            details:new Date()
        }
    }
    dateChange=(event)=>{
        this.setState({date:event.target.value});
    }
    detailsChange=(event)=>{
        this.setState({details:event.target.value});
    }
    display=()=>{
        console.log(this.state.date," ",this.state.details);
        fetch(`/api/unavailable`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                date:this.state.date,
                details:this.state.details
            })
          })
          .then(response => response.json())
          .then( ret => {
              console.log(ret)
            if (ret.status===true){
              alert('Leave Saved !')
          }
          })
    }
    render()
{    return(
        <div className='time'>
            <br/>
            <h1>Request Time off</h1><br/><br/><br/>
            <label htmlFor="fromdate">Date</label>
            : <input onChange={this.dateChange}
            type="date" placeholder="dd/mm/yyyy"></input><br/><br/><br/>
            <label htmlFor="todate">Leave Explanation</label>
            : <textarea 
            name="text" rows="10" cols="8" wrap="soft"
            onChange={this.detailsChange}/><br/><br/><br/>
            <button onClick={this.display}>Submit</button>
        </div>
    );}
}
export default TimeOff; 