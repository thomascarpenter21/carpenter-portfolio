import React, { Component } from 'react';
import { BrowserRouter as Route, Switch, Router } from 'react-router-dom'; 
import { Home } from './Home/Home';
import { About } from './About/About';
import { Skills } from './Skills/Skills';
import { Projects } from './Projects/Projects';
import {Contact} from './Contact/Contact';
import { NoMatch } from './NoMatch/NoMatch';
import { NavigationBar } from './components/NavigationBar';
import GlobalStyle from './Theme/globalStyle';
import { ThemeProvider } from 'styled-components';

//import { Layout } from './components/Layout';

const theme = {
  fonts: {
    mq: `
    font-size: 2.5em;
      @media only screen and (max-width: 767px) {
        font-size: 1.8em;
      }
      @media only screen and (max-width: 480px) {
        font-size: 0.8em;
      }`
  }
};

class App extends Component {
  render() {
    return (
        <Router>  
        <ThemeProvider theme={theme}>
        <GlobalStyle />  
        <NavigationBar />
              <Switch> 
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/contact" component={Contact} />
                  <Route component={NoMatch} />
              </Switch>
              </ThemeProvider> 
            </Router>
    );
  }
}

export default App;

