import React from "react";
import "./PatientHistory.css";

class PatientHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pat_id: "Enter Patient Id" ,
      a:[]
    };
  }
  handleChange=(e)=> {
    this.setState({ pat_id: e.target.value });
  }
  handleSearch=()=> {
    //fetch data from api with the user id corresponding to pat_id
    console.log(this.state.pat_id);
    if(this.state.pat_id!=="Enter Patient Id"){
    fetch(`/api/patient_records`,{
      method:'put',
      body:JSON.stringify({
        pat_id:this.state.pat_id
      }),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response=>response.json())
    .then(ret=>{
      console.log(ret)
      if(ret.status===true){
        this.setState({a:ret.message});
      }
      else{
        alert("Enter valid patient id !")
      }
    })
  }
  else{
    alert('Enter Patient Id first !');
  }
  }
  some=(a)=>{
    return(
      <div className="rec">
      <div className="rec-individual">
      <div>{a.medical_record_id} </div>
      <div>{a.doctor}</div>
    <div>{a.department_name}</div>
      <div>{a.symptoms}</div>
      <div>{a.medication_prescribed}</div>
      </div>
    </div>)
  }
  render() {
    return (
      <div className="patient-history">
        <div className="centered">
          <h1>Patient History</h1>
        </div>
          <div className="patient-history-search">
            <div className="centered">
              <div>
                <input
                  type="text"
                  name="pat_id"
                  value={this.state.pat_id}
                  placeholder="Enter Patient Id"
                  onChange={this.handleChange}
                />
                <button type="button" onClick={this.handleSearch}>Search</button>
              </div>
            </div>
          </div>
       <div>
       <div>
             <div style={{"fontWeight":"bold"}} className="heads">
                <div>Record ID</div>
                <div>Doctor Name</div>
                <div>Department</div>

                <div>Diagnosis</div>
                <div>Prescription</div>
                </div>
                <br/>
                {
                    (this.state.a.length>0)?(
                        this.state.a.map((a)=>this.some(a))
                    ):
                      <h3 style={{"marginLeft":"20%"}}>No Records</h3>
                      
                }
        </div>
    </div>
      </div>
    );
  }
}

export default PatientHistory;
