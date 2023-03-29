// import { createSlice} from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { login, logout, register, setAuthHeader, verify } from './operations';

let initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isVerified: true,
  isPending: false,
};

const savedUser = JSON.parse(localStorage.getItem('user'));
if (savedUser) {
  initialState = savedUser;
  setAuthHeader(savedUser.token);
}

export const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isVerified = false;
      localStorage.setItem('user', JSON.stringify(state));
    })
    .addCase(register.rejected, (_state, action) => {
      alert(action.payload);
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(state));
    })
    .addCase(login.rejected, (_state, action) => {
      alert(action.payload);
    })
    .addCase(logout.fulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isPending = false;
      localStorage.removeItem('user');
    })
    .addCase(logout.pending, state => {
      state.isPending = true;
    })
    .addCase(logout.rejected, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isPending = false;
      localStorage.removeItem('user');
    })
    .addCase(verify.fulfilled, (state, action) => {
      state.isVerified = true;

    });
});

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
