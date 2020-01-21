import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="section-header-spacer"></div>
        <Content></Content>
        <div className="section-line">
          <div className="line "></div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
