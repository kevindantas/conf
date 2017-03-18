import React, {Component} from 'react'
//import Router from 'next/router'

// import Box from '../components/Box';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import Logo from '../components/Logo';

export default class extends Component {
  render() {
    return (
      <div className='cont'>
        <Header />

        <div className='logo'>
          <Logo />
          <Buttons className='btns' />
        </div>

        {/*<div className='footer'>*/}
        {/*<Box>*/}
        {/*<h3>DATA</h3>*/}
        {/*<h2>{Globals.date.full}</h2>*/}
        {/*<p>10:00am - 17:00pm</p>*/}
        {/*</Box>*/}
        {/*<Box>*/}
        {/*<h3>LOCAL</h3>*/}
        {/*<h2>{Globals.location.city}</h2>*/}
        {/*<p>{Globals.location.locale}</p>*/}
        {/*</Box>*/}
        {/*</div>*/}
        <style jsx>{`
          .cont {
            background: #161616 url(/static/media/images/pattern.png);
            color: white;
            height: 100vh;
            width: 100%;
            min-width: 100vw;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }

          .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .footer {
            align-self: flex-end;
            display: flex;
            @media(max-width: 720px) {
              align-self: auto;
            }
          }

          .btns {
            align-self: flex-end;
            display: flex;
            @media(max-width: 720px) {
              align-self: auto;
            }
          }
        `}</style>
      </div>
    )
  }
}