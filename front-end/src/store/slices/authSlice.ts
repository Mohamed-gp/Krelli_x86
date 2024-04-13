import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : [], // just a dummy data
    },
    reducers : {
        login : (state,action) {
            state.user = action.payload
        },
        logout : (state,action){
            state.user = []
        },
    }
})

const authActions = authSlice.actions
const authReducer = authSlice.reducer

export {authActions,authReducer}