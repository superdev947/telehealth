var initdata = {
    authToken : null, 
    isWelcome : false,
    role:null
}
const appDataReducer = (state = initdata, action) => {
    switch (action.type) {
        case "AUTHTOKEN": {
            return { ...state, authToken: action.payload }
        }
        case "LOGOUT": {
            return { ...state, authToken: null }
        }
        case "WELCOME_DONE": {
            return { ...state, isWelcome: action.payload }
        }
        case "SET_ROLE": {
            return { ...state, role: action.payload }
        }
        default: {
            return state
        }
    }
}
export default appDataReducer
