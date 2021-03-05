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
import {
	setPassiveTouchGestures,
	setRootPath
} from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

//Json arry for Product List
var productList = [{
		id: 0,
		ProductCategory: 'Google1',
		ProductName: 'Unisex   Sunglasses',
		Off: "10%",
		Price: 23,
		Img: "images/g15.jpg",
		ProductDesc: "good",
		Brand: "abn",
		Pattern: "solid",
		Occation: "Formal",
		Color: "Black",
		Availability: 10
	},

	{
		id: 1,
		ProductCategory: 'Google2',
		ProductName: ' Wayfarer Sunglasses    ',
		Off: "20%",
		Price: 20,
		Img: "images/g12.jpg",
		ProductDesc: "good",
		Brand: "abn",
		Pattern: "solid",
		Occation: "Formal",
		Color: "Black",
		Availability: 11

	},
	{
		id: 2,
		ProductCategory: 'Google2',
		ProductName: '   Women Sunglasses',
		Off: "20%",
		Price: 19,
		Img: "images/g11.jpg",
		ProductDesc: "good",
		Brand: "abn",
		Pattern: "solid",
		Occation: "Formal",
		Color: "Black",
		Availability: 10

	},
	{
		id: 3,
		ProductCategory: 'Google3',
		ProductName: 'Men Sunglasses',
		Off: "20%",
		Price: 18,
		Img: "images/g16.jpg",
		ProductDesc: "good",
		Brand: "abn",
		Pattern: "solid",
		Occation: "Formal",
		Color: "Black",
		Availability: 10

	},
	{
		id: 4,
		ProductCategory: 'Google6',
		ProductName: 'Unisex Sunglasses',
		Off: "20%",
		Price: 24,
		Img: "images/g4.jpg",
		ProductDesc: "good",
		Brand: "abn",
		Pattern: "solid",
		Occation: "Formal",
		Color: "Black",
		Availability: 10

	},
	{
		id: 5,
		ProductCategory: 'Google7',
		ProductName: 'UV protected Sunglasse',
		Off: "20%",
		Price: 25,
		Img: "images/g13.jpg",
		ProductDesc: "good",
		Brand: "abn",
		Pattern: "solid",
		Occation: "Formal",
		Color: "Black",
		Availability: 11

	}

];



class MyApp extends PolymerElement {
	static get template() {
		return html`
    <!-- app-routing -->
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="login" href="[[rootPath]]login"></a>
            <a name="home" href="[[rootPath]]home"></a>
            <a name="product" href="[[rootPath]]product"></a>
            <a name="cart" href="[[rootPath]]cart"></a>
            <a name="register" href="[[rootPath]]register"></a>
            <a name="purchase" href="[[rootPath]]purchase"></a>

          </iron-selector>
        

        <!-- Main content -->
       
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-login name="login"></my-login>
            <my-home product-list="{{productList}}" product-id="{{productId}}" name="home"></my-home>
            <product-details my-cart="{{myCart}}" product-list="{{productList}}" product-id="{{productId}}" name="product"></product-details>
            <cart-items my-cart="{{myCart}}" product-list="{{productList}}" product-id="{{productId}}" name="cart"></cart-items>
            <purchase-list product-list="{{productList}}" product-id="{{productId}}" name="purchase"></purchase-list>

            <my-register name="register"></my-register>

            <my-view404 name="view404"></my-view404>
          </iron-pages>
       
          `;
	}

	static get properties() {
		return {
			//page property which is used for page navigation
			page: {
				type: String,
				reflectToAttribute: true,
				observer: '_pageChanged'
			},
			routeData: Object,
			subroute: Object,
			name: {
				type: String,
			},
			myCart: {
				type: Array,
				value: [],
				observer: '_cartChanged'

			},
			// product id which is used for passing data to all childrens
			productId: {
				type: Object,
				value: {},
				observer: '_productIdChanged'
			},
			// productList which is used for storing the product details
			productList: {
				type: Array,
				value: productList,
				observer: '_productsListChanged'


			}

		};
	}
	// _productIdChanged is observer call back funtion and also it will pass array items as an object
	_productIdChanged() {
		console.log(this.productId);
	}
	// _productListChanged is observer call back funtion and also it will pass product List as  an array
	_productsListChanged() {
		console.log(this.productList);
	}
	_cartChanged() {
		console.log(this.myCart);
	}


	static get observers() {
		return [
			'_routePageChanged(routeData.page)'
		];



	}

	_routePageChanged(page) {
		// Show the corresponding page according to the route.
		//
		// If no page was found in the route data, page will be an empty string.
		// Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
		if (!page) {
			this.page = 'login';
		} else if (['login', 'home', 'product', 'cart', 'register', 'purchase'].indexOf(page) !== -1) {
			this.page = page;
		} else {
			this.page = 'view404';
		}


	}

	_pageChanged(page) {
		// Import the page component on demand.
		//
		// Note: `polymer build` doesn't like string concatenation in the import
		// statement, so break it up.
		switch (page) {
			case 'login':
				import('./my-login.js');
				break;
			case 'home':
				import('./my-home.js');
				break;
			case 'product':
				import('./product-details.js');
				break;
			case 'cart':
				import('./cart-items.js');
				break;
			case 'register':
				import('./my-register.js');
				break;
			case 'purchase':
				import('./purchase-list.js');
				break;
			case 'view404':
				import('./my-view404.js');
				break;
		}
	}
}

window.customElements.define('my-app', MyApp);