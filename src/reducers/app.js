import { SWITCH_LANGUAGE } from '../actions'
import { defaultLanguage } from '../const'

const defaultApp = {
    language: defaultLanguage,
}

const appReducer = (app = defaultApp, action) => {
    switch (action.type) {
        case SWITCH_LANGUAGE:
            return {...app, language: action.language};
        default:
            return app;
    }
}

export default appReducer;
