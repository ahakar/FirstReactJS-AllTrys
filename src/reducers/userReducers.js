const userReducers = (state = {user: [], name: "abcd"}, action) => {
	switch(action.type){
		case "ADD_USER_DATA":
		return {user: [...state.user.concat(action.payload)]};
		break;

		case "UPDATE_USER_DATA":
		let updateUserData = [...state.user];
		const indexToUpdate = updateUserData.findIndex(function(user, id){
			return id === action.payload.id;
		})
		console.log("indexToUpdate", indexToUpdate);

		const updatedUserValue = {
			name: action.payload.userUpdatedData.name,
			email: action.payload.userUpdatedData.email,
			mobile: action.payload.userUpdatedData.mobile,
		}
		return {
			user: [...state.user.slice(0, indexToUpdate), updatedUserValue, 
			...state.user.slice(indexToUpdate + 1)]
		}
		break;



		case "DELETE_USER_DATA":
		return {
			user: [
				...state.user.slice(0, action.payload),
				...state.user.slice(action.payload + 1)
			]
		}
		break;

		default:
		return state;
	}
}

export default userReducers;