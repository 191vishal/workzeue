const { Component, Store, mount } = owl;
const { xml } = owl.tags;
const { RouteComponent } = owl.router
const { whenReady } = owl.utils;
const { useRef, useDispatch, useState, useStore } = owl.hooks;
const {qweb} = owl;

import { Signup } from "./Sign_up.js";
import { Header } from "./header.js";
import { Content } from "./Content.js";
import { Footer } from "./Footer.js";
import { LogIn } from "./login.js";
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
	static components = { Header, Content, Footer, LogIn, RouteComponent };
	
}

const ROUTES = [
	  { name: "signup", path: "/signup", component: Signup},
	  { name: "signin", path: "/signin", component: LogIn},
	  { name: "CROP", path: "/crop", component: Crop},
	  { name: "home", path: "/", component: Content},
];

function makeEnvironment() {

    const env = { qweb };
    env.router = new owl.router.Router(env, ROUTES);
    env.router.start();
    return env;
}
BRT.env = makeEnvironment();

// Setup code
async function setup() {
	
	const bgrmtl=new BRT();
 	bgrmtl.mount(document.body);
}

whenReady(setup);