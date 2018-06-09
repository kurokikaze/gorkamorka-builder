import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Builder from './components/Builder'
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

addLocaleData([...en, ...ru])

const App = () => (
  <Provider store={store}>
    <div>
      <header>
        Test
      </header>

      <main>
        <Builder />
      </main>
    </div>
  </Provider>
)

export default App;
