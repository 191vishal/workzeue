const { Component,Store, mount, useState } = owl;
const { xml } = owl.tags;


export class signup extends Component {
  constructor()
   {
      super(...arguments);
      this.state = useState({
          pwd: "",
          repwd: "",
          pwmatch: undefined,
          invalid_eml:"",
      });
   }


_onSubmitForm(ev)
   {
      const xhr = new window.XMLHttpRequest();
      xhr.open('POST', '/do_signup');
      const formData = new FormData(ev.currentTarget);
      xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
      xhr.onload = async () => {
          const response = JSON.parse(xhr.response);
            console.log(response)
            if (response.credentials === false) {
                this.state.invalid_eml = "Emailid already exist";
            }
            else{
                alert("registeration Successfullly")
                this.env.router.navigate({to:'login'});
            }
        };
    }

    

_checkPwd() 
   {
      if (!this.state.pwd || !this.state.repwd) {
          return;
      }
      if (this.state.pwd === this.state.repwd) {
          this.state.pwmatch = true;
          this.el.querySelector('input[type="submit"]').removeAttribute('disabled');
      } else {
          this.state.pwmatch = false;
          this.el.querySelector('input[type="submit"]').setAttribute('disabled', true);
      }
   }

_onKeyUpRePwd(ev)
  {
    this._checkPwd();
  }

_onKeyUpPwd(ev) 
  {
    this._checkPwd();
  }

  static template = xml`
    <div style="height:52em;">
  <br/>
  <div class="d-flex justify-content-center" style="height:51 em;">
    <div class="card">
      <div class="bg-light">
        <div class="container">
          <div class="py-5 text-center">
            <img class="d-block mx-auto mb-4" src="/bootstrap4/img/logo1.png" alt="" width="72" height="72"/>
            <h2>Registration Form</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form action="/signup" t-on-submit.prevent="_onSubmitForm">
              <br/>
              <div class="form-group">
                <label for="InputMobileNumber">User Name</label>
                <span class="input-group-text bg-white px-4 border-md border-right-0">
                  <i class="fa fa-user text-muted"></i> 
                  <input type="text" class="form-control" id="username" name="username" placeholder="Vishal191" required="true" />
                </span>
              </div>
              <div class="form-group">
                <label for="InputMobileNumber">Mobile Number</label>
                <span class="input-group-text bg-white px-4 border-md border-right-0">
                    <i class="fa fa-phone-square text-muted"></i>
                    <input type="text" class="form-control" id="mobileno" name="mobileno" placeholder="1234567890" required="true" />
                </span>                          
            </div>
            <div class="form-group">
                <label for="InputPassword">Password</label>
                <span class="input-group-text bg-white px-4 border-md border-right-0">
                  <i class="fa fa-lock text-muted"></i>
                  <input type="Password" class="form-control" t-model="state.pwd" t-on-keyup="_onKeyUpPwd" id="password" name="password" placeholder="w25_956*3" required="true"/>
                </span>
            </div>
            <div class="form-group">
                <label for="Inputconform_Password">Conform Password</label>
                <span class="input-group-text bg-white px-4 border-md border-right-0">
                  <i class="fa fa-lock text-muted"></i>
                  <input type="Password" class="form-control" t-model="state.repwd" t-on-keyup="_onKeyUpRePwd" id="conformpassword" name="conformpassword" placeholder="w25_956*3" required="true"/>                                
                </span>               
            </div>
            <div t-if="state.pwmatch === false">
              <h4>Password Does not match</h4>
            </div>
            <div class="form-group ">
              <input type="checkbox" class="check"/>
              <label for="check">By sining up I agree with terms and conditions.</label>
            </div>
            <div class="row">
              <input type="submit" class="btn btn-primary btn-lg btn-block"  disabled="True" value="Sign Up"/>                          
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


