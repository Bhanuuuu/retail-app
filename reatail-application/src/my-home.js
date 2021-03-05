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
import '@polymer/paper-button/paper-button.js';
class MyHome extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}"></app-location>
    <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .entire{
          background-image: linear-gradient(MidnightBlue	, MediumBlue	);
          overflow-y:hidden;
        }

        .navigation{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 45px;
        }
        .content-section {
          margin: 1em;
        }
        .btn{
          background-color:indigo;
          color:white;
        }
        .container {
         max-width: 900px;
         margin: 0 auto;
         padding: 0 1.5em;
        }
        .section-header {
         font-family: "Metal Mania";
         font-weight: normal;
         color: white;
         text-align: center;
         font-size: 2em;
        }    
        .shop-items {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-around;
        }
        footer{
         display: flex;
         justify-content: space-around;
         align-items: center;
         padding: 10px;
         border-top: 1px solid rgba(0,0,0,0.1);
         margin-top: 20px;
        }
        .copyright{
         font-size: 0.9rem;
         color: white;
         letter-spacing: 1px;
        }
        .phone{
         font-size: 0.9rem;
         color: white;
         letter-spacing: 1px;
        }
        .card1 {
         margin: 24px;
         padding: 16px;
         color: #757575;
         border-radius: 5px;
         background-color: #fff;
         background-image: linear-gradient(black, darkgray);
         box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
         position:static;
        }
        .abn{
          color:white;
        }
       .img-top  {
         width: 180px;
         height: 207px;
         display: flex;
         margin: auto;
        }
        @media(max-width:1010px){
          .card1 {
            margin: 24px;
            padding: 16px;
            color: #757575;
            border-radius: 5px;
            background-color: #fff;
            background-image: linear-gradient(black, darkgray);
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            position:static;
           }
           .navigation{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }          
          }
         
        @media(max-width:600px){
          .card1 {
            margin: 24px;
            padding: 16px;
            color: #757575;
            border-radius: 5px;
            background-color: #fff;
            background-image: linear-gradient(black, darkgray);
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            position:static;
           }
           .navigation{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          .btn{
            background-color:indigo;
            color:white;
            height:25px;
            width:40px;
          }
        }
   
    </style>
      <!-- html content for header -->

    <div class="entire">
      <div class="card1">
       <div class="navigation">
          <h3 class="abn" >ABN STORE</h3>
          <paper-button raised class="btn" on-click="logout">Logout</paper-button>
        </div>
      </div>
      <!-- html content for product list page -->
      <section class="container content-section" >
        <h2 class="section-header">PRODUCTS</h2>
        <div class="shop-items">
          <dom-repeat items="[[productList]]">
           <template strip-whitespace="">
             <div class="card" on-click="handler">
               <div>
                 <img src={{item.Img}}  class="img-top" alt="...">
               <div >
               <h5 >{{item.ProductCategory}}</h5>
               <p >{{item.ProductName}}</p>
             </div>
           </template>
          </dom-repeat>
            
        </div>
      </section>
      <!-- html content for footer -->
      <footer class="card1">
        <div >
        <span class="copyright">
          Copyright:abn&#169.com
        </span><br>
        <div class="phone">
          <span>Call: +123456789</span>
        </div>
        </div>
      </footer>
    </div>
      `;
   }

   static get properties() {
    return {
     //ProductList is property which is taking ProductList array values from my-app
     productList:{
       type:Array,
       value:[],
       notify:true
      },
     //ProductId is property which is accessing productId from my-app
     productId:{
        type:Number,
        notify:true,
        observer:'_checkId'
      }
    };
  }
  //logout is for navigates to login page
  logout(){
    this.set('route.path','/login');
    location.reload();  
   }
  // when product card is clicked this funct0ion will be executed and 'productId' event will be fired in parent component. passing selected product to products product details page
  handler(e){
   this.set('route.path','/product');
   this.productId = e.model.item;
  }
  // it is observer call back funtion and also it will pick the index of particular item which user select
  _checkId(e){
   console.log(e);
  }
}

window.customElements.define('my-home', MyHome);
