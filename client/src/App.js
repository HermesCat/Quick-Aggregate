import React from 'react';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register'
import PageWrapper from './components/Page-Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
// import Books from "./pages/Books";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <PageWrapper>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </PageWrapper>
        <Footer />
      </>
    </Router>
  );
}

export default App;
