import * as React from "react"
import './Login.scss'
import Logo from '../images/logo.png'
import Messenger from '../images/msn_7-5-0299_main.png'
import Msn from '../images/msn.png'
import Passport from '../images/passport.png'
import 'xp.css/dist/XP.css'
import Background from '../images/bg-messenger.gif'
import { useState } from "react"

interface ILoginProps {
  onClick: () => void
}

const Login = ({onClick} : ILoginProps) => {
  return (
    <div className="LoginContainer">
      <div className="Login">
        <div className="Login__banner"> 
          <img className="Login__logo" src={Logo}/>
          <img className="Login__messenger" src={Messenger}/>
        </div>
        <div className="Login__maincontent">
          <img className="Login__msn" src={Msn}/>
          <div className="Login__wrapper">
            <div style={{color: '#10117f', marginBottom: '2px'}} className="Login__text">
              E-mail address:
            </div>
            <div style={{display: 'flex'}}>
              <div className="Login__emailbox Login__input">
                <input type="text" className="Login__input"></input>
              </div>
              <div className="Login__trianglebox">▾</div>
            </div>
          </div>
          <div className="Login__wrapper">
            <div style={{color: '#10117f', marginBottom: '2px'}} className="Login__text">
              Password:
            </div>
            <div className="Login__passwordbox Login__input">
              <input type="text" className="Login__input"></input>
            </div>
          </div>
          <div style={{color: '#10117f', marginTop: '16px', display: 'flex', width: '240px', marginBottom: '20px'}} className="Login__text">
            <div style={{marginRight: '12px'}}>
              Status:
            </div>
            <div style={{marginRight: '12px'}}>
              Online
            </div>
            <div>
              ▾
            </div>
          </div>
          <div style={{width: "240px"}}>
            <div className="customcheckbox">
              <input type="checkbox" id="scales"/>
              <label htmlFor="scales">
                <div className="Login__text" style={{marginLeft: "4px"}}>
                  Remember Me
                </div>
              </label>
            </div>
          </div>
          <div style={{width: "240px"}}>
            <div className="customcheckbox">
              <input type="checkbox" id="scales1"/>
              <label htmlFor="scales1">
                <div className="Login__text" style={{marginLeft: "4px"}}>
                  Remember my Password
                </div>
              </label>
            </div>
          </div>
          <div style={{width: "240px"}}>
            <div className="customcheckbox">
              <input type="checkbox" id="scales2"/>
              <label htmlFor="scales2">
                <div className="Login__text" style={{marginLeft: "4px"}}>
                  Sign me in automatically
                </div>
              </label>
            </div>
          </div>
            <button style={{width: '100px', height: '36px', marginTop: '40px'}} onClick={onClick}>
              <div style={{fontSize: '16px', color: '#020276'}}>
                <b>Sign In</b>
              </div>
            </button>
        </div>
        <div className="Login__footer">
          <img src={Background} className="Login__bgimage"/>
          <div className="Login__footertext">
            <div>
              Forgot your password?
            </div>
            <div className="Login__footercontainer">              
              <div className="Login__left">
                Service Status
              </div>
              <div className="Login__right">
                Get a new account
              </div>
            </div>

          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <img className="Login__passport" src={Passport}/>
            <div className="Login__text">
              Microsoft Passport Network
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login