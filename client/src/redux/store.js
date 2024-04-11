import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"

export const store = configureStore({
    reducer: {
        auth: userReducer,
    }
})

// Création du réducteur initial
// const initialState = {
//     isAuthenticated: false,
//     token: null,
// }

// Création de l'action pour la connexion
// export const login = createAction("LOGIN", (token) => {
//     return {
//         payload: token,
//     }
// })

// Création de l'action pour la déconnexion
// export const logout = createAction("LOGOUT", () => {
//     return {
//         payload: null,
//     }
// })

// Configuration du store Redux
// export const store = configureStore({
//     reducer: reducer
// })

// Création du réducteur
// const reducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(login, (currentState, action) => {
//             // Mise à jour de l'état pour la connexion
//             currentState.isAuthenticated = true
//             currentState.token = action.payload
//         })
//         .addCase(logout, (currentState) => {
//             // Mise à jour de l'état pour la déconnexion
//             currentState.isAuthenticated = false
//             currentState.token = null
//         })
// })
