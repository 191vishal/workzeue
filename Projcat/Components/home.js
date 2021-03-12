const { Component, Store, mount } = owl;
const { xml } = owl.tags;
const { RouteComponent } = owl.router
const { whenReady } = owl.utils;
const { EventBus } = owl.core;
const { useRef, useDispatch, useState, useStore } = owl.hooks;
const {qweb} = owl;

import { signup } from "./Sign_up.js";
import { Header } from "./header.js";
import { homebody } from "./homebody.js";
import { Footer } from "./Footer.js";
import { logIn } from "./login.js";
import { Crop } from "./Crop.js";

const APP_TEMPLATE = xml/* xml */ `
<div>
	<div>
		<Header/>
	</div>
	<div>
		<RouteComponent/>
	</div>
	<div>
		<Footer/>
	</div>
</div>`;




class BRT extends Component {
	static template = APP_TEMPLATE;
	static components = { Header, homebody, Footer, logIn, RouteComponent };
	
}

const ROUTES = [
	  { name: "signup", path: "/signup", component: signup},
	  { name: "signin", path: "/signin", component: logIn},
      { name: "crop", path: "/crop", component: Crop},
	  { name: "home", path: "/", component: homebody},
];

function makeEnvironment() {
    const env = { qweb };   
    const router = new owl.router.Router(env, ROUTES);
    env.router.start();
    env.bus = new EventBus();
    return env;
}

BRT.env = makeEnvironment();

// Setup code
function setup() {
    const app = new BRT();
/*    app.env.router.navigate({to: 'signup'});
*/    app.mount(document.body);
}
whenReady(setup);