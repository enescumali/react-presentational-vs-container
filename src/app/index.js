import React from "react";
import ReactDOM from "react-dom";
import UserListDataContainer from './userListDataContainer';
import UserListDataContainerApi from './userListDataContainer-api';
//import UserListUIContainerFromApi from './userListUIContainer-api';

class App extends React.Component{
	render() {

		return (
			<div className="container">
				<h1>Presentational vs Container</h1>
				
				<UserListDataContainer />
				<UserListDataContainerApi />
				
			</div>
			
		)
	}
}

ReactDOM.render(<App/>, window.document.getElementById("app"));