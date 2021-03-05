/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

class MyLogin extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <style >
        :host {
          display: block;
           
          padding: 10px;
         
        }
        .a1{
          background-image: linear-gradient(MidnightBlue	, MediumBlue	);
          overflow-y:hidden;
          height:100%;
          
        }
        .btn{
          background-color:indigo;
          color:white;
        }
        
        .card {
          margin-top: 50px;
          margin-left:500px;
          margin-bottom:400px;
          background-color:white;
          padding: 16px;
          color: #757575;
          width:500px;
          border-radius: 5px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        .c1{
          marigin-top:20px;
          color:blue;
        }
        
        @media(max-width:1010px){
          
          
        .a1{
          background-image: linear-gradient(MidnightBlue	, MediumBlue	);
          height:1000px;
          
        }
        .card {
          margin-top: 25px;
          margin-left:30%;
          margin-bottom:100px;
          padding: 10px;
          color: #757575;
          width:250px;
          border-radius: 5px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
       } 
        }
        @media(max-width:600px){
          
        .a1{
          
          background-image: linear-gradient(MidnightBlue	, MediumBlue	);
          height:700px;
          
        }
          .card {
            margin-top: 25px;
            margin-left:10px;
            margin-bottom:100px;
            padding: 10px;
            color: #757575;
            width:250px;
            border-radius: 5px;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          }
          
        }

      </style>
      <!-- html content for login Form -->
      <div class="a1"> 
       <div class="c1">          
         <center>
           <h4 ><b> ABN STORE</b></h4>
         </center>
        </div>
       <div class="card">
         <div class="c1">          
           <center>
             <h4> SIGN IN</h4>
           </center>
         </div>
         <paper-input label="Username"  maxlength="10" auto-validate pattern="[a-zA-Z]*" error-message="letters only!" value = "{{userName}}"></paper-input>
         <paper-input type= "password" maxlength="6" label="Password" required auto-validate error-message="Enter Strong Password "  auto-validate pattern="[a-zA-Z0-9]*" value="{{Password}}" ></paper-input><br>
         <paper-button raised class="btn" on-click="home">SIGNIN</paper-button>
         <paper-button raised class="btn" on-click="register">SIGNUP</paper-button>
       </div>
      </div> 
      `;
  }
  static get properties() {
    return {
      userName: {
        type: String,
        value: '',
        
      }
    };
  }
  static get properties() {
    return {
      Password: {
       type: String,
       value: '',
      }
    };
  } 

 // handleUser for vallidating User name
  handleUser(e){
    this.userName = e.target.value;
    console.log(this.userName);
  }
 //  handleUser for vallidating Password 
  handleUser(e){
    this.Password = e.target.value;
    console.log(this.Password);
  }

 // home is for checking the authentication Values 
  home(){
    if(this.userName=='bhanu'&& this.Password=='1234'){
      this.set('route.path','/home');
      
    }
    else{
      alert("please enter valid Deatails")
      
    }
  }
 //register is for navigates to SIGNUP page
  register(){
      this.set('route.path','/register');

    }  
}
window.customElements.define('my-login', MyLogin);
