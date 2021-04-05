import React from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from './redux/store';
import { fetchMe } from './redux/actions/auth';
import { Home, Launches, LaunchesDetail, Missions, Cores, About, Auth } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';

const Wrapper = () => {
  const dispatch = useDispatch();

  // User token read
  const getCookieValue = (name) => {
      const value = document.cookie.match('(^|;)\s*' + name + '\s*=\s*([^;]+)');
      return value ? value.pop() : '';
  }

  // Searching for user token
  const token = getCookieValue('jwt');

  React.useEffect(() => {
    dispatch(fetchMe(token));
  }, []);

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
          <Route path='/about' component={About} exact />
          <Route path='/auth' component={Auth} />
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
