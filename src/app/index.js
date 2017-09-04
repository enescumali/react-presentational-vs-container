import React from "react";
import ReactDOM from "react-dom";
import UserListUIContainer from './userListUIContainer';
import UserListUIContainerFromApi from './userListUIContainer-api';

class App extends React.Component{
	render() {

		return (
			<div className="container">
				<h1>Presentational vs Container</h1>
				
				<p>The following two UserList presentational containers are managed by two different container components. 
				The first list is managed by "UserListUIContainer" and datas are provided by a dummy data file (./data/userListData.js)
				The second one is managed by "UserListUIContainerFromApi" and datas are provided by a dummy API (https://api.myjson.com/bins/nql3d)
				</p>
				<p>In conclusion, two different component containers (with different data sources) uses the same presentational container. 
				It can be made more customized by using attributes.</p>
				
				<UserListUIContainer />
				<UserListUIContainerFromApi />
			</div>
			
		)
	}
}

ReactDOM.render(<App/>, window.document.getElementById("app"));