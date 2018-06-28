import appReducer from '../app'; 
import { defaultLanguage } from '../../const';
import { SWITCH_LANGUAGE } from '../../actions';

describe('App Reducer', () => {
    it('updates app language', () => {
        const testLanguage = 'sw';
        const defaultState = {
            language: defaultLanguage,
        }

        const languageChangeAction = {
            type: SWITCH_LANGUAGE,
            language: testLanguage,
        }
        const targetState = {
            language: testLanguage,
        }

        expect(appReducer(defaultState, languageChangeAction)).toEqual(targetState);
    });
});