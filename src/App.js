import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Builder from './components/Builder'

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
