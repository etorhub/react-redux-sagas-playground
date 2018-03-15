import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import store from './store';
import routes from './routes';

const muiTheme = createMuiTheme({});
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      {routes}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
