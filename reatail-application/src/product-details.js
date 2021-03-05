/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-button/paper-button.js';

class ProductDetais extends PolymerElement {
	static get template() {
		return html`
    <app-location route="{{route}}" > </app-location>
    <style include="shared-styles">
      :host {
          display: block;

          padding: 10px;
       }
       .entire{
        background-image: linear-gradient(MidnightBlue	, MediumBlue	);

        overflow-y:hidden;
      }

      .abn{
         color:white;
       }
       .navigation{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 45px;
        }
        .navigation1{
          display: flex;
          justify-content:center;
          padding: 0px 45px;
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
        .btn{
          background-color:indigo;
          color:white;
        }
        .btn1{
          background-color:indigo;
          color:white;
        }
		
         .c1{
          display: flex;
         flex-wrap: wrap;
         justify-content: center;
        }
      .b1{
          display: grid;
          justify-content: space-around;
          align-items: center;
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
      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
      }
      
      th, td {
        text-align: left;
        padding: 8px;
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
        .navigation1{
          display: grid;
          grid-template-columns: auto ;
          padding: 0px 45px;
        }
        .btn1{
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
           <paper-button raised class="btn1" on-click="logout">Logout</paper-button>
         </div>
        </div>
      <div class="card">
       <paper-button raised class="btn" on-click="back">HOME</paper-button>
       <!-- html content for product details page -->
       <div class="c1">
         <img  src={{productId.Img}}  alt="product-details">
       </div>
       <center><h3> {{productId.ProductName}}</h3></center>
       <div class="navigation1">
       <div  style="overflow-x:auto;">
       <table>
        <tr> <td><b>Brand:</b></td><td><small>{{productId.Brand}}</small></td></tr>
        <tr><td> <b >Pattern:</b></td><td><small>{{productId.Pattern}}</small></td></tr>
        <tr><td> <b >Color:</b></td><td><small>{{productId.Color}}</small></td></tr>
        <tr> <td><b>Price</b></td>
        <td> <b >$ {{productId.Price}}</b></td></tr>
        </table>
       </div>
       </div>
       <br>
       <div class="b1">
         <paper-button raised class="btn" on-click="cart">Add To Cart</paper-button>
       </div>
       <div class="c1">
         <h6>Product Description</h6>
         <p >Care Instructions: Blow some air on lens before cleaning to avoid scratches,And use only cleaning cloth provided by SunTap Sunglasses.
         PERFECT ALL ROUNDER ? SunTap sunglasses is the perfect choice for outdoor sports and activities such as cycling, driving, shopping, Fashion,travelling, hiking, and is suitable as high fashion accessory and daily wear all year round. It is also gift packaged ready, making it a wonderful yet practical gift idea for friends and family.
         </p>
       </div>
      </div>
    <!-- html content for footer -->
    <footer class="card1">
        <div class="navigation">
        <span class="copyright">
          Copyright:abn&#169.com
        </span>
        <div class="phone">
          <span>Call: +123456789</span>
        </div>
        </div>
      </div>  
	  <!--
      <cart-items my-cart="{{myCart}}" product-list="{{productList}}"></cart-items>
	  -->

     `;
	}
	static get properties() {
		return {
			//ProductList is property which is taking ProductList array values from my-app
			productList: {
				type: Array,
				value: [],
				notify: true,
			},
			myCart: {
				type: Array,
				value: [],
				notify: true,
			},

			//ProductId is property which is accessing productId from my-app
			productId: {
				type: Object,
				value: {},
				notify: true,
				observer: "_checkId"
			},

		};
	}
	//logout is for navigates to login page
	logout() {
		this.set('route.path', '/login');
    location.reload();  
	}
	//back is for navigates to previous page
	back() {
		this.set('route.path', '/home');
	}
	//by this cart selected product values passed to cart-items page
	cart() {
		let productExisted = false;
		// check production is already existed or not using map myCart array
		// if already inside myCart, then increment quantity to that product
		// else add product to myCart array
		let updatedProducts = this.myCart.map((product, index) => {
			if (product.id === this.productId.id) {
				productExisted = true;
				product.qty += 1;
				this.notifyPath("myCart." + index + ".qty", product.qty);
			}
			return product;
		});

		if (productExisted) {
			this.myCart = updatedProducts;
		} else {
			// add product to myCart array
			let product = this.productId;
			console.log(product);
			product.qty = 1;
			this.myCart.push(product);
		}

		// using this to notify cart in my-app.js
		let toSetCart = this.myCart.map((product) => {
			return product
		});
		console.log(this.myCart);
		this.set('myCart', toSetCart);
		this.set('route.path', '/cart');
	}
	//it is observer call back funtion and also it will pick the index of particular item which user select
	_checkId(e) {
		console.log(e);
	}
}

window.customElements.define('product-details', ProductDetais);