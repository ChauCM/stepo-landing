// CSS and SASS files
import './index.scss';

import { default as Tobi } from '@midzer/tobii'
const tobi = new Tobi()

// Remove the two following lines to remove the product hunt floating prompt
// import FloatingPrompt from 'producthunt-floating-prompt'
// FloatingPrompt({ name: 'Mobile App Landing Page', url: 'https://www.producthunt.com/posts/mobile-app-landing-page', bottom: '96px', width: '450px' })

// Remove the following lines to remove the darkmode js
import Darkmode from 'darkmode-js'
function addDarkmodeWidget() {
  const options = {
    bottom: '32px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  new Darkmode(options).showWidget()
}
window.addEventListener('load', addDarkmodeWidget)
