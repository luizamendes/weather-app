import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { Homepage } from './pages/Homepage';
import { WeatherInfo } from './pages/WeatherInfo';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/weather" component={WeatherInfo} />
      </Switch>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  </>
);

export default App;
