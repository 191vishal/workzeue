const { Component,Store, mount } = owl;
const { xml } = owl.tags;


export class Signup extends Component {

  static template = xml`
  <div style="height:56em;">
  	<div class="d-flex justify-content-center" style="height:55	em;"	>
  	  			<div class="card">

  		<div class="bg-light">
  			<div class="container">
			  <div class="py-5 text-center">
			    <img class="d-block mx-auto mb-4" src="img/logo1.png" alt="" width="72" height="72"/>
			    <h2>Registration Form</h2>
			  </div>
			 </div>
  		</div>
  		<div class="container">
  			<div class="row">
  				<div class="col-md-12">
  					<form>
  						<br/>
  						<div class="form-group">
				            <label for="role">Role</label>
				             <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-black-tie text-muted"></i>
                            	<select class="form-control " id="role">
				              <option value="">Choose Role...</option>
				              <option>Admin</option>
				              <option>Customer</option>
				              <option>Farmer</option>
				            </select>
				            <div class="invalid-feedback">
				              Please select a valid Role.
				            </div>
                            </span>
				            
				          </div>
  						<div class="form-group">
  							  <label for="InputMobileNumber">User Name</label>
    						  <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-user text-muted"></i>	
                            	<input type="text" class="form-control" id="username" placeholder="Vishal191" />
                            </span>
    					</div>
    					<div class="form-group">
						    <label for="InputMobileNumber">Mobile Number</label>
						    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-phone-square text-muted"></i>
                                <input type="text" class="form-control" id="mobileno" placeholder="1234567890" />
                            </span>                      	   
						</div>
						<div class="form-group">
						    <label for="InputPassword">Password</label>
						    <span class="input-group-text bg-white px-4 border-md border-right-0">
						    	<i class="fa fa-lock text-muted"></i>
						    	<input type="Password" class="form-control" id="password" placeholder="w25_956*3"/>
						    </span>
						</div>
						<div class="form-group">
						    <label for="Inputconform_Password">Conform Password</label>
						    <span class="input-group-text bg-white px-4 border-md border-right-0">
						    	<i class="fa fa-lock text-muted"></i>
						    	<input type="Password" class="form-control" id="conformpassword" placeholder="w25_956*3"/>                                
                            </span>
						    
						</div>
						<div class="form-group">
						    <input type="checkbox" class="check"/>
						    <label for="check">By sining up I agree with terms and conditions.</label>
						</div>
						<hr class="mb-4"/>
						<div class="row">
							<input type="submit" class="btn btn-primary btn-lg btn-block" value="Sign Up"/>
							<center>OR</center>
							<input type="submit" class="btn btn-primary btn-lg btn-block" value="Sign In"/>
						</div>
  					</form>
  				</div>
  			</div>
  		</div>
  		</div>
  	</div>
  </div>`;
}
/*validuser(ev){
	if (ev.keyCode === 13) {
    	const title = ev.target.value.trim();
		
		var illegalChars = /\W/;
		if (title == "") {
         alert("You didn't enter a username.");
         return false;
     	}
  //    	else if ((title.value.length < 5) || (title.value.length > 15)) {
		// alert("The username is the wrong length.");
		// return false;
		// }
		// else if (illegalChars.test(title.value)) {
		// 	alert("The username contains illegal characters.");
		// 	return false;
		// } 
	}

}
validMob(ev){
	if (ev.keyCode === 13) {
    	const title = ev.target.value.trim();
		
		if (title == "") {
         alert("You didn't enter a Mobile.");
         return false;
     }
}

}
// forget(){
// 	location.replace("./forgor.js");
// }

}

// */
// <div class="task-list" id="task-list">
//   		<div class="signup-wrap">
//   			<div class="signup-html">
//   				<label for="tab-1" class="tab">Sign Up</label>
//   				<div class="hr"></div>
//   				<div class="signup-form">
//   					<div class="sign-in-htm">
//   						<div class="group">
// 							<label for="user" class="label">Username</label>
// 							<input id="user" type="text" t-on-keyup="validuser" class="input"/>
// 						</div>
// 						<div class="group">
// 							<label for="mobail" class="label">Mobile Number</label>
// 							<input id="mobail" type="text"  t-on-keyup="validMob" class="input"/>
// 						</div>
// 						<div class="group">
// 							<label for="pass" class="label">Password</label>
// 							<input id="pass" type="password" class="input" data-type="password"/>
// 						</div>
// 						<div class="group">
// 							<label for="conpass" class="label">Confirm Password</label>
// 							<input id="pass" type="password" class="input" data-type="password"/>
// 						</div>
// 						<div class="group">
// 							<input id="check" type="checkbox" class="check"/>
// 							<label for="check">By sining up I agree with terms and conditions.</label>
// 						</div>
// 						<div class="group">
// 							<input type="submit" class="button" value="Sign Up"/>
// 							<center>OR</center>
// 							<input type="submit" class="button" value="Log In"/>
// 						</div>
//   					</div>
//   				</div>
//   			</div>
//   		</div>
//   	</div>`;


