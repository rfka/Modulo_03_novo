import React from 'react';
import './Nav.css';

export default class Nav extends React.Component {
    render(){
        return(
            <>
            <div className='tudo'>
                <div className='menu'>
                    <div className='logo'>
                        
                    </div>
                    <div className='links'>
                        <nav>
                            <ul>
                                <li><a href='#home'>Home</a></li>
                                <li><a href='#jogos' offset='200'>Jogos</a></li>
                                <li><a href='#incluir'>Incluir</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            </>
        );
    }
}