import React from "react";
import ReactDOM from "react-dom";
import UserListData from './data/userListData';
import UserListComponent from './userList.jsx';
import styles from '../assets/css/components/user-list.css';

class UserListUIContainer extends React.Component{

	constructor(props) {
        super(props);
        this.state = { 
        	users: [],
        	isLoaded: false
        };

        this.toggleSelect = this.toggleSelect.bind(this);
    }

    componentWillMount() {
		this.setState({
			users: UserListData 
		});
	}

	componentDidMount() {
    	this.setState({
    		isLoaded: true
    	});
    }

	render() {
		return (<UserListComponent users={this.state.users} isLoaded={this.state.isLoaded} toggleSelect={this.toggleSelect} />);
	}

	toggleSelect(userId){
		
		for( var i in this.state.users){
			
			if(this.state.users[i].id == userId){
				var newUsers = this.state.users;

				newUsers[i].active = !this.state.users[i].active; 
				
				this.setState({
					users: newUsers
				});
			}
		}
	}
}

export default UserListUIContainer;

