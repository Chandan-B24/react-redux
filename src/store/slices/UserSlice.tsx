import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : [],
    reducers : {
        addUser(state: any, action: any) {
            state.push(action.payload)
        },
        removeUser(state: any, action: any) {
            state.splice(action.payload,1)
        },
        deleteUsers(state: any, action: any) {
            
        }
    }
});


export default userSlice.reducer;
export const {addUser,removeUser,deleteUsers} = userSlice.actions;