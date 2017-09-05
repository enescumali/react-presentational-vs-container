import React from "react";
import ReactDOM from "react-dom";
import UserListData from './data/userListData';
import UserListUIContainer from './userListUIContainer';

class UserListDataContainer extends React.Component{

	constructor(props) {
        super(props);
        this.state = { 
        	users: []
        };
	}
    componentWillMount() {
		this.setState({
			users: UserListData 
		});
	}

	render() {
		return (<UserListUIContainer users={this.state.users} />);
	}
}

export default UserListDataContainer;

