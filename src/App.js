import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Home } from './Home/Home';
import { About } from './About/About';
import { Skills } from './Skills/Skills';
import { Projects } from './Projects/Projects';
import {Contact} from './Contact/Contact';
import { NoMatch } from './NoMatch/NoMatch';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import GlobalStyle from './Theme/globalStyle';
import { ThemeProvider } from 'styled-components';
//import { Layouts } from './components/Layouts';

const theme = {
  fonts: {
    mq: `
    font-size: 3.5em;
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
      <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle /> 
        <Router>
        <NavigationBar />
        <Footer /> 
        {/* <Layouts> */}
              <Switch> 
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/contact" component={Contact} />
                  <Route component={NoMatch} />
              </Switch>
              
        {/* </Layouts>   */}

            </Router>    
      </React.Fragment>
      </ThemeProvider> 
    );
  }
}

export default App;

