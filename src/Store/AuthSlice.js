import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Status:false,
    UserData:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.Status = true;
            state.UserData = action.payload.UserData;
        },
        
        logout:(state)=>{
            state.Status = false;
            state.UserData = null
        }
    }
})

export const {login,logout} = authSlice.actions

export default authSlice.reducer

