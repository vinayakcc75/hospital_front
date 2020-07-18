import React from "react";
import "./RecordsList.css";
import x from "../icons8-x-50.png";

function RecordDetails(props) {
  return (
    <div className="record">
      <img
        src={x}
        alt="close"
        onClick={props.onClick}
        className="go-back"
        width="40"
        height="40"
      />
      <div className="dd-box">
        <div className="doctor-box">
          <h4>Doctor</h4>
          <p>John</p>
        </div>
        <div className="date-box">
          <h4>Date</h4>
          <p>02 June 2020</p>
        </div>
      </div>
      <div>
        <div className="problem">
          <h4>Problem</h4>
          <p>Description Of Problem</p>
          <h6>{props.data}</h6>
        </div>
        <div className="medication">
          <h4>Medication</h4>
          <p>Steps</p>
        </div>
        <div className="care">
          <h3>Steps to follow</h3>
          <p>Extra-care like food habits</p>
        </div>
      </div>
    </div>
  );
}

function SimpleRecord(props) {
  return (
    <div className="simple-record">
      <div className="dept">
        <h3>{props.data}</h3>
      </div>
      <div className="simple-heading">
        <h4>Simple Descriton of Problem </h4>
      </div>
      <div className="date">
        <h5> Day Month Year </h5>
      </div>
    </div>
  );
}

class RecordsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, cur_data: {} };
  }
  toggle = () => {
    this.setState({ open: !this.state.open });
  };
  handleClick(data) {
    this.toggle();
    this.setState({ cur_data: data });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.open === true && (
            <RecordDetails
              data={this.state.cur_data}
              onClick={() => {
                this.toggle();
              }}
            />
          )}
        </div>
        <div>
          {this.state.open === false && (
            <div className="text-style">
              {this.props.data.map((d, i) => {
                return (
                  <div
                    onClick={() => {
                      this.handleClick(d);
                    }}
                    key={d}
                  >
                    <SimpleRecord data={d} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default RecordsList;
