const { Component,Store, mount, useState} = owl;
const { xml } = owl.tags;

export class Header extends Component {

  constructor() {
        super(...arguments);
        this.env.bus.on('login_changed', this, this._loginChanged);
        // this.env.bus.on('session_val', this, this.session_val);
        this._updateState();
    }
    _updateState() {
        this.state = useState({
            user_id: odoo.session_info.user_id,
            is_valid: odoo.session_info.is_valid,
            session_id: odoo.session_info.session_id
        });
    }
  async onClickSignUp(ev){
       await this.env.router.navigate({to:'signup'});
    }
  async onClickHome(ev){
       await this.env.router.navigate({to:'home'});
    }
  async onClickSignin(ev){
       await this.env.router.navigate({to:'signin'});
    }
  async crop(ev){
       await this.env.router.navigate({to:'CROP'});
    }

    async logout(ev){
            this.valid = ev.valid;
            const xhr = new window.XMLHttpRequest();
            xhr.open('POST', '/do_logout');
            xhr.send(JSON.stringify({'session_id': this.state.session_id}));
            xhr.onload = async () => {
                const response = JSON.parse(xhr.response);
                if (response.logout === 'success') {
                    document.cookie = 'session_id=null';
                    odoo.session_info = {
                        user_id: null,
                        is_valid: false,
                        session_id: null,
                    };
                    this._updateState();
                    this.env.router.navigate({ to: 'home' });
                }
            }
        }
    
    _loginChanged (ev) {
        this._updateState();
    }

static template = xml `
<div>
      <nav class="navbar fixed-top navbar-light bg-light">
      <ul class="nav nav-tabs" id="myTab" role="tablist" style="width:100em;">
         <t t-if="state.user_id and state.is_valid">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" t-on-click="onClickHome">Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" t-on-click="logout">LOGOUT</button>
          </li>
          </t>
          <t t-else = "" >
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" t-on-click="onClickHome">Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"  t-on-click="onClickSignUp">Sign Up</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false" t-on-click="onClickSignin">Sign In</button>
          </li>
          </t>
        </ul>
    </nav>
     <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="/bootstrap4/img/1.jpg" alt="" width="1350em" height="150"/>
    </div>

</div>`;

    
}

// <img src="img/img1.jpeg" class="d-block w-100" alt="..."/>

  // <div class="p-3 mb-2 bg-primary text-white">
  //       <div class="container">
  //         <div class="jumbotron">
  //           <h2 class="text-center">Morden Mandia Baza</h2>
  //         </div>
  //       </div>
  //       <ul class="nav nav-tabs" id="myTab" role="tablist">
  //       <li class="nav-item" role="presentation">
  //         <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" t-on-click="onClickHome">Home</button>
  //       </li>
  //       <li class="nav-item" role="presentation">
  //         <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"  t-on-click="onClickSignUp">Sign Up</button>
  //       </li>
  //       <li class="nav-item" role="presentation">
  //         <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false" t-on-click="onClickSignin">Sign In</button>
  //       </li>
  //     </ul>
  //     </div>

     /*  <div class="container">
          <div class="jumbotron">
             <h1>Morden Mandia bazar</h1>
          </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div role="container-fluid">
          <div class="collapse navbar-collapse">
            <div class="navbar-header">
                <a href="#">About As</a>
                <a id="cnt" href="#contect">Contect</a>
                <input type="button" value="Sign up" t-on-click="onClickSignUp"/>
            </div>
          </div>
        </div>
    </nav>*/



/*        <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
  
          <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
        </div>    
        </div>
    </nav>  */