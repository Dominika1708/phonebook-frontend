export const selectAuth = state => state.auth;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsPending = state => state.auth.isPending;
