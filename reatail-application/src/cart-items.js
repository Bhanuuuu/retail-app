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
import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js';
import '@polymer/paper-button/paper-button.js';
class CartItems extends PolymerElement {
	static get template() {
		return html`
    <!-- app-location is an element that provides
   synchronization between the browser location bar and the state of an app-->

    <app-location route="{{route}}" ></app-location>

      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .c1{
          display: grid;
          justify-content: space-around;
          align-items: center;
		  height:100px;
          padding: 10px;
          margin-top: 20px;
        }
        .float{
          float:left;
        }
		.navigation{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0px 45px;
		  }
		 
        .card1 {
          margin-left: 30%;
          padding: 1px;
          height:500px;
          width:400px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          position:static;
        }
        .btn{
          background-color:white;
          color:black;
        }
		.btn1{
			background-color:indigo;
			color:white;
		  }
		.entire{
			background-image: linear-gradient(MidnightBlue	, MediumBlue	);
			overflow-y:hidden;
		  }
		  .card2 {
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
		  
		  
		@media(max-width:600px){
          
			.card1 {
			  margin-right: 20%;
			  margin-left: 10%;
			  margin-top: 5%;
			  padding: 16px;
			  height:420px;
			  width:200px;
			  color: #757575;
			  border-radius: 5px;
			  background-color: #fff;
			  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
			  
			}
			  
		   
		  }  
  
  
      </style>
      <!-- html content for  page -->
	  <div class="entire">
       <div class="card2">
         <div class="navigation">
           <h3 class="abn" >ABN STORE</h3>
           <paper-button raised class="btn1" on-click="logout">Logout</paper-button>
         </div>
        </div>
    
	  <paper-button raised class="btn" on-click="back">HOME</paper-button>
      <dom-repeat items="[[myCart]]">
      <template strip-whitespace="">
        <div class="card1">
           <div class="c1">
             <img src={{item.Img}}>
           </div>
           <div class="c1">
             <h3 > {{item.ProductName}}</h3>
           </div>
           <div class="c1">
             <small>Qty:</small>
             <div class="float">
               <input type="button" value = "-" on-click="qtyDec"></input>
               <input type="button" value ="{{item.qty}}"></input>
               <input type="button" value = "+" on-click="qtyInc"></input></br>
             </div><br>
             <small>Price</small>
             <b>$ {{item.Price}}</b>
            </div>
         </div>
      </template >
      </dom-repeat>
	  <hr>
		<center > <small class="abn" >Total</small>
		 <b class="abn" >$ {{sum}}</b>
		 </center>
	   <template is="dom-if" if="[[myCart.length]]">
		<center><paper-button raised class="btn" on-click="purchase">PURCHASE</paper-button></center>
	   </template>
	   <footer class="card2">
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
			productList: {
				type: Array,
				value: [],
				notify: true,
			},
			myCart: {
				type: Array,
				value: [],
				notify: true,
				observer: "updateSum"
			},

			//Qty is property which is Quantity of Product
			Qty: {
				type: Number,
				value: 0,
				notify: true
			},
			//sum is property for updating total cost
			sum: {
				type: String,
				value: 0,
				notify: true
			},
			//ProductId is property which is accessing productId from my-app
			productId: {
				type: Number,
				observer: '_checkId'
			}
		};
	}
	//back is for navigates to previous page
	back() {
		this.set('route.path', '/home');
	}
	//it is observer call back funtion and also it will pick the index of particular item which user select
	_checkId(e) {
		console.log(e);
	}
	// updateSum
	updateSum() {
		this.sum = 0;
		// set myCart with new name to update to new function
		let toSetSum = this.myCart.map((product) => {
			this.sum += product.Price * product.qty;
			return product
		});
	}
	//qtyDesc is for updating total when Quantity Decreases
	qtyDec(e) {
		let currentProduct = e.model.item;
		let productExisted = false;
		
		// update myCart data
		let updatedProducts = this.myCart.map((product, index) => {
			if (product.id === currentProduct.id) {
				productExisted = true;
				product.qty -= 1;
				if (product.qty <= 0) {
					product.qty = 1;
				}
				this.notifyPath("myCart." + index + ".qty", product.qty);
			}
			return product;
		});

		this.myCart = updatedProducts;

		// set myCart with new name to update to new function
		let toSetCart = this.myCart.map((product) => {
			return product
		});
		this.set('myCart', toSetCart);


		// update total price
		this.updateSum();
	}
	//qtyInc is for updating total when Quantity Increases
	qtyInc(e) {
		let currentProduct = e.model.item;
		let productExisted = false;

		// update myCart data
		let updatedProducts = this.myCart.map((product, index) => {
			if (product.id === currentProduct.id) {
				productExisted = true;
				product.qty += 1;
				this.notifyPath("myCart." + index + ".qty", product.qty);
			}
			return product;
		});

		this.myCart = updatedProducts;


		// set myCart with new name to update to new function
		let toSetCart = this.myCart.map((product) => {
			return product
		});
		this.set('myCart', toSetCart);

		// update total price
		this.updateSum();
	}
	//purchase is alert message after clicking the purchase button
	purchase() {
		this.sum = 0;
		this.set('myCart', []);
		alert("Thank you for purchsing. Please visit again.");
		this.set('route.path', '/home');
	}
	logout(){
		this.set('route.path','/login');
		location.reload();  
	   }
	  

}


window.customElements.define('cart-items', CartItems);