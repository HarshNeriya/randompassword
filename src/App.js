import logo from './logo.svg';
import './App.css';
import { UC,LC,NC,SC } from './password';
import { useState } from 'react';
import { NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {
//   let w ="welcometows"
//  var t=w.length;
//  var random="";
//  for(var i=0; i<5; i++){ 
//   random+=w[Math.floor(Math.random()*t)]
// }

//  console.log(random)
  
 
  let[uppercase,setuppercase]=useState(false);
  let[lowercase,setlowercase]=useState(false);
  let[numbers,setnumbers]=useState(false);
  let[symbols,setsymobols]=useState(false);
  let[randompass,setrandompass]=useState('');
  let[textlength,settextlength]=useState(10)
  
  let passwordCreate=()=>{
    let passChar='';
    if((uppercase)||(lowercase)||(numbers)||(symbols)){
      if(uppercase){
       passChar+=UC;
      }
      if(lowercase){
       passChar+=LC
      }
      if(numbers){
        passChar+=NC
      }
      if(symbols){
        passChar+=SC
      }
      // console.log(passChar)
      let t =passChar.length
      // console.log(t)
      let randompass1='';
      for(let i=0; i<textlength; i++){
        randompass1+=passChar.charAt(Math.floor(Math.random()*t))
      }
      setrandompass(randompass1)
      NotificationManager.success('Password genereated');
    }
   
    else{
      NotificationManager.error('One Checkbox Select');
    }
  }
  let copypassword=()=>{
    navigator.clipboard.writeText(randompass)
  }

  return (
    <div className="App">
      <div class="container">
  <h2>Password Generator</h2>
  <div class="result-container">
    <span>{randompass}</span>
    <button onClick={copypassword} class="btn" id="clipboard">
      <i class="far fa-clipboard"></i>
    </button>
  </div>
  <div class="settings">
    <div class="setting">
      <label>Password Length</label>
      <input type="number" onChange={(event)=>settextlength(event.target.value)} id="length" min="4" max="20" value={textlength} />
    </div>
    <div class="setting">
      <label>Include uppercase letters</label>
      <input type="checkbox"onChange={()=>setuppercase(!uppercase)} checked={uppercase} name="uppercase" />
    </div>
    <div class="setting">
      <label>Include lowercase letters</label>
      <input type="checkbox"onChange={()=>setlowercase(!lowercase)} checked={lowercase}name="lowercase" />
    </div>
    <div class="setting">
      <label>Include numbers</label>
      <input type="checkbox" onChange ={()=>setnumbers(!numbers)} checked={numbers} name="numbers" />
    </div>
    <div class="setting">
      <label>Include symbols</label>
      <input type="checkbox"onChange={()=>setsymobols(!symbols)} checked={symbols} name="symbols" />
    </div>
  </div>

  <button onClick={passwordCreate} class="btn btn-large" id="generate">Generate Password</button>
</div>
 
<script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
<div class="watermark-ctr">
  <a target="_blank" href="https://zaap.bio/vishalzen">
    <button class="generate-button">
      <svg class="icon" viewBox="0 0 24 26">
        <path d="M5.16515 2.62145L5.8075 0.999247C5.83876 0.919722 5.9154 0.866699 6.00112 0.866699C6.08683 0.866699 6.16347 0.919722 6.19473 0.999247L6.83708 2.62145L8.44145 3.27094C8.5201 3.30254 8.57254 3.38003 8.57254 3.4667C8.57254 3.55337 8.5201 3.63085 8.44145 3.66246L6.83708 4.31195L6.19473 5.93415C6.16347 6.0147 6.08683 6.0667 6.00112 6.0667C5.9154 6.0667 5.83876 6.0147 5.8075 5.93415L5.16515 4.31195L3.56078 3.66246C3.48112 3.63085 3.42969 3.55337 3.42969 3.4667C3.42969 3.38003 3.48112 3.30254 3.56078 3.27094L5.16515 2.62145Z" />
        <path d="M11.2362 9.43967C11.5502 9.30067 11.8015 9.05025 11.9405 8.73617L13.5494 5.11725C13.7169 4.74204 14.0887 4.5 14.5 4.5C14.9112 4.5 15.2839 4.74204 15.4506 5.11725L17.0603 8.73617C17.1985 9.05025 17.4497 9.3015 17.7638 9.43967L21.3827 11.0494C21.7579 11.2161 22 11.5887 22 12C22 12.4112 21.7579 12.7831 21.3827 12.9506L17.7638 14.5595C17.4497 14.6985 17.1993 14.9497 17.0603 15.2638L15.4506 18.8827C15.2839 19.2579 14.9112 19.5 14.5 19.5C14.0887 19.5 13.7169 19.2579 13.5494 18.8827L11.9405 15.2638C11.8015 14.9497 11.5502 14.6985 11.2362 14.5595L7.61725 12.9506C7.24204 12.7831 7 12.4112 7 12C7 11.5887 7.24204 11.2161 7.61725 11.0494L11.2362 9.43967Z" />
        <path d="M4.60728 19.392L5.67703 16.6875C5.72997 16.5541 5.85854 16.4666 6.00056 16.4666C6.14258 16.4666 6.27031 16.5541 6.32325 16.6875L7.39299 19.392L10.0678 20.4736C10.1997 20.5271 10.2863 20.6563 10.2863 20.7999C10.2863 20.9435 10.1997 21.0735 10.0678 21.1271L7.39299 22.2087L6.32325 24.9123C6.27031 25.0457 6.14258 25.1332 6.00056 25.1332C5.85854 25.1332 5.72997 25.0457 5.67703 24.9123L4.60728 22.2087L1.93333 21.1271C1.8014 21.0735 1.71484 20.9435 1.71484 20.7999C1.71484 20.6563 1.8014 20.5271 1.93333 20.4736L4.60728 19.392Z" />
      </svg>
      <span>Social Links</span>
    </button></a>
</div>
<NotificationContainer/>
    </div>
  );
}

export default App;
