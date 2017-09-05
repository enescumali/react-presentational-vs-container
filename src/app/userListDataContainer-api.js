import React from "react";
import ReactDOM from "react-dom";
import UserListUIContainer from './userListUIContainer';

class UserListDataContainerApi extends React.Component{

	constructor(props) {
        super(props);
        this.state = { 
        	users: []
        };
	}

    componentWillMount() {
		fetch("https://api.myjson.com/bins/nql3d") 
			.then((resp) => resp.json())
  			.then((data) => {
  				this.setState({
  					users: data
				})
		});
	}

	render() {
		return (<UserListUIContainer users={this.state.users} />);
	}
}

export default UserListDataContainerApi;

