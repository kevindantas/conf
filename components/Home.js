import React, { PureComponent } from 'react'

import Buttons from '../components/Buttons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

export default class extends PureComponent {
  render() {
    return (
      <div className='cont'>
        <Header />

        <div className='logo'>
          <Logo />
          <Buttons className='btns' />
        </div>

        <Footer />

        <style jsx>{`
          .cont {
            background: #161616 url(/static/media/images/pattern.png);
            color: #FFF;
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