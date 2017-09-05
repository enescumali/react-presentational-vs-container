import React from "react";
import ReactDOM from "react-dom";

class UserListComponent extends React.Component{

	render() {
		console.log("ui render")
		return (
			<div className="user-list">

				{/*Spinner  */}
				<div className={"spinner " + (this.props.isLoaded ? 'hidden' : '')}>
	            	<img src="../../assets/images/loader.gif" />
	          	</div>
				
				{/*List UI*/}
				<div className={"list-group " + (this.props.isLoaded ? '' : 'hidden')}>
					{this.props.users.map( user => {
						
						return (
							<a href="javascript:;"
								key={user.id} 
								className =	{[
										"list-group-item clearfix ", 
										user.active && 'active',
										user.gender == "Male" && "list-group-item-info",
										user.gender == "Female" && "list-group-item-danger"
									].join(' ')} 
								
								onClick={this.props.toggleSelect.bind(null, user.id)}> 
								
								{ user.first_name } { user.last_name } 
								
							</a>
						)
					})}
				</div>
			</div>
		)
	}

}

export default UserListComponent;

