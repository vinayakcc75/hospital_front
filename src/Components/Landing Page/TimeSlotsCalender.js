import React from 'react';
import './TimeSlotsCalender.css'
class TimeSlotsCalender extends React.Component{
    constructor(props){
        super(props);
    }
    selectSlot= (k)=>{
        const b=':00';
        let position=5;
        const output = [k.slice(0, position)]
        this.props.upDate(output+b);
    }
    radiobuttonSlots=(start,end,str)=>{
        let k= start+"-"+end;
        return(
        <div className="oneSlot">
        {(str==='blurred')?(
            <div className="disable">
        <label className="disable" style={{"color":"grey"}} htmlFor="selectedslot">{k}</label>
        <input className="disable" disabled name="selectedslot" onChange={()=>{this.selectSlot(k)}} value="k" type="radio"></input>
        </div>
        )
        :(
        <div>
        <label htmlFor="selectedslot">{k}</label>
        <input  name="selectedslot" onChange={()=>{this.selectSlot(k)}} value="k" type="radio"></input>
        </div>
        )}
        </div>
        )
    }
    morningTimes=[
            ['09:00','09:30'],
            ['09:30','10:00'],
            ['10:00','10:30'],
            ['10:30','11:00'],
            ['11:00','11:30'],
            ['11:30','12:00']
    ]
    eveningTimes=[
            ['18:00','18:30'],
            ['18:30','19:00'],
            ['19:00','19:30'],
            ['19:30','20:00']
        ]
    render(){
        const {disabledSlots}=this.props;
        return(
            <div className="timeslot">
                <div className="morning">
                <h2>Morning Slot Timings</h2>
                {this.morningTimes.map(times=>{return(
                    (disabledSlots.includes(times[0]+':00'))?
                    this.radiobuttonSlots(times[0],times[1],'blurred'):
                    this.radiobuttonSlots(times[0],times[1],'none')
                )
                })}
                </div>
                <br/>
                <div className="evening">
                <h2>Evening Slot Timings</h2>
                {this.eveningTimes.map(times=>{return(
                    (disabledSlots.includes(times[0]+':00'))?
                    this.radiobuttonSlots(times[0],times[1],'blurred'):
                    this.radiobuttonSlots(times[0],times[1],'none')
                )
                })}                </div>
            </div>
        )
    }

}
export default TimeSlotsCalender;