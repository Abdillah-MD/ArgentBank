export const selectToken = (state) => state.auth.token
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectCreateAcountSuccess = (state) => state.auth.createAcountSuccess
export const selectUser = (state) => state.auth.user
export const selectError = (state) => state.auth.error