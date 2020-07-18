import React,{Component} from 'react';
import './App.css';
import LandingPage from './Components/Landing Page/LandingPage';

class App extends Component{
	// componentDidMount() {
	// 	document.body.style.background = "linear-gradient(to right,lightblue 40%,cyan 80%)"
	// }
	render(){
	return (
			<div className="App">	 
				<LandingPage />
			</div>
		);
		}
}

export default App;
//npm install node-sass