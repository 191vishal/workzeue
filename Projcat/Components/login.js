const { Component,Store, mount } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const {useRef, useState,useStore} = owl.hooks;
const {qweb} = owl;


//import {App} from "./forgor.js";


export class logIn extends Component {

async _onLoginForm (ev) 
{
	debugger;
	const xhr = new window.XMLHttpRequest();
	xhr.open('POST', '/do_login');
	const formData = new FormData(ev.currentTarget);
	xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
	xhr.onload = async () => {
		const response = JSON.parse(xhr.response);
	    if (response.credentials === false) {
	        this.state.invalid = true;
	    } else if (response.session_id)
	    {
	        localStorage.setItem('session_id', response.session_id);
	        this.env.bus.trigger('login_changed', {valid: true});
			this.env.router.navigate({to:'crop'})
	    };
	}
}

  static template = xml`
  <div style="height:43em;">
  		<br/>
  		<div class="d-flex justify-content-center" style="height:40em;"	>
  			<div class="card" style="width: 20rem;">
   				<div class="card-body">
   				<div class="bg-light">
		  			<div class="container">
					  <div class="py-5 text-center">
					    <img class="d-block mx-auto mb-4" src="bootstrap4/img/logo1.png" alt="" width="72" height="72"/>
					    <h2>Sign In</h2>
					  </div>
					 </div>
		  		</div>
		  			<form t-on-submit.prevent="_onLoginForm">
		  			<br/>
					  <div class="form-outline mb-4">
					  	<span class="input-group-text bg-white px-4 border-md border-right-5">
                                <i class="fa fa-user text-muted"></i>
                                <input type="text" name="email" class="form-control" placeholder="Your User Id *" required="true" />
                        </span>
					    
					  </div>
					  <div class="form-outline mb-4">
					  	 <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-lock text-muted"></i>
                         		<input type="password" name="password" class="form-control" placeholder="Your Password *" required="true"/>			    
                         </span>
					  </div>
					   <div class="row mb-4">
					    <div class="col d-flex justify-content-center">
					    	<div class="form-check">
					        	<label class="form-check-label" for="form2Example3"> Remember me </label>
					      	</div>
					    </div>

					    <div class="col">			 
					      <a href="#!">Forgot password?</a>
					    </div>
					  </div>
					  <div class="row">
					  <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
					  </div>
					  <div class="text-center">
					    <p>or sign up with:</p>
					    <button type="button" class="btn btn-primary btn-floating mx-1">
					      <i class="fab fa-facebook-f"></i>
					    </button>

					    <button type="button" class="btn btn-primary btn-floating mx-1">
					      <i class="fab fa-google"></i>
					    </button>

					    <button type="button" class="btn btn-primary btn-floating mx-1">
					      <i class="fab fa-twitter"></i>
					    </button>

					    <button type="button" class="btn btn-primary btn-floating mx-1">
					      <i class="fab fa-github"></i>
					    </button>
					  </div>
					</form>
				</div>
			</div>	
  		</div>
  		</div>`;

// forget(){
// 	location.replace("./forgor.js");
// }

}

// one code

// <div class="d-flex justify-content-center" style="height:26em;">
//   			<div class="card" style="width: 18rem;">
//   				<div class="card-body">
//   			<form>
// 			  <div class="mb-3">
// 			    <label for="exampleInputEmail1" class="form-label">Email address</label>
// 			    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
// 			    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
// 			  </div>
// 			  <div class="mb-3">
// 			    <label for="exampleInputPassword1" class="form-label">Password</label>
// 			    <input type="password" class="form-control" id="exampleInputPassword1"/>
// 			  </div>
// 			  <div class="mb-3 form-check">
// 			    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
// 			    <label class="form-check-label" for="exampleCheck1">Check me out</label>
// 			  </div>
// 			  <button type="submit" class="btn btn-primary">Submit</button>
// 			</form>
// 			</div>
// 			</div>
//   		</div>`;

// second code

// <div class="login-wrap">
//   			<div class="login-html">
//   				<label for="tab-1" class="tab">Sign In</label>
//   				<div class="login-form">
//   					<div class="sign-in-htm">
//   						<div class="group">
// 							<label for="user" class="label">Username</label>
// 							<input id="user" type="text" class="input"/>
// 						</div>
// 						<div class="group">
// 							<label for="pass" class="label">Password</label>
// 							<input id="pass" type="password" class="input" data-type="password"/>
// 						</div>
// 						<div class="group">
// 							<input id="check" type="checkbox" class="check"/>
// 							<label for="check">Keep me Signed in</label>
// 						</div>
// 						<div class="group">
// 							<input type="submit" class="button" value="Sign In"/>
// 						</div>
// 						<div class="hr"></div>
// 						<div class="foot-lnk">
// 							<input type="button" class="button" value="forget" t-on-click="forget"/>
// 						</div>
//   					</div>
//   				</div>
//   			</div>
//   		</div>