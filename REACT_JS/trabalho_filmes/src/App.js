import React from 'react';
import './App.css';
// import Header from './Header';
import Consulta from './consulta';
// // import Incluir from './Incluir'
// import Footer from './Footer';
import Nav from './Nav'


export default class App extends React.Component{
  render(){
    return(
      <>
        <section id='home'>
        <div className='nav'>
          <Nav/>
        </div>
        <div>
          {/* <Header/> */}
          <Consulta/>
          {/* <Incluir/> */}
          {/* <Footer/> */}
        </div>
        </section>
      </>
    );
  }
}
