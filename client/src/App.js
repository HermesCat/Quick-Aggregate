import React from 'react';
import './App.css';
import "./colors.css";
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register'
import Contact from './pages/Contact'
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
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </PageWrapper>
        <Footer />
      </>
    </Router>
  );
}

export default App;
