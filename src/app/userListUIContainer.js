import React from "react";
import ReactDOM from "react-dom";
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
			users: this.props.users 
		});

	}

	componentDidMount() {
    	this.setState({
    		isLoaded: true
    	});
    }

	render() {
		return (<UserListComponent users={this.props.users} isLoaded={this.state.isLoaded}  toggleSelect={this.toggleSelect} />);
	}

	toggleSelect(userId){
		
		for( var i in this.state.users){
			
			if(this.state.users[i].id == userId){
				var newUsers = this.state.users;
				
				newUsers[i].active = !this.state.users[i].active; 
				
				this.setState({
					users: newUsers
				});

				break;
			}
		}
	}
}

export default UserListUIContainer;

