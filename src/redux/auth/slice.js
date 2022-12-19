import { login, logout, register } from "./operations";
import { createReducer} from '@reduxjs/toolkit';
// import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     extraReducers: {
//         [register.fulfilled](state, action) {
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//             state.isLoggedIn = true
//         },
//         [login.fulfilled](state, action) {
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//             state.isLoggedIn = true
//          },
//         [logout.fulfilled](state) {
//             state.user = { name: null, email: null };
//             state.token = null;
//             state.isLoggedIn = false
//         },
//     }
// })

// export const authReducer = authSlice.reducer;

export const authReducer = createReducer(
    initialState,
    (builder) => {
        builder
        .addCase(register.fulfilled, (state, action) => { 
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true
         })
        .addCase(logout.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false  
        })
    }
)

