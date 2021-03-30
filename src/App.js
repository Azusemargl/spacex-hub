import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from './redux/store';
import { Home, Launches, LaunchesDetail, Missions, Cores } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="inner">
        <div className="container">
          <Route path="/" component={Home} exact />
          <Route path='/launches' component={Launches} exact />
          <Route path='/launches/:id' component={LaunchesDetail} exact />
          <Route path='/missions' component={Missions} exact />
          <Route path='/cores' component={Cores} exact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Wrapper />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
