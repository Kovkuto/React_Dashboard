import { StateType } from './darkModeContext';
const darkModeReducer = (state: StateType, action: { type: string, payload?: {} }) => {
    switch (action.type) {
        case 'LIGHT': {
            return {
                darkMode: false
            }
        }
        case 'DARK': {
            return {
                darkMode: true
            }
        }
        case 'TOGGLE': {
            return {
                darkMode: !state.darkMode
            }
        }
        default:
            return state
    }
}

export default darkModeReducer
