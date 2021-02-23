const { Component,Store, mount } = owl;
const { xml } = owl.tags;

export class Header extends Component {


static template = xml `
    <div >
      <div class="bloc l-bloc" id="nav-bloc">
  <div class="container">
      <div class="navbar-header">
        <img class="d-block mx-auto mb-4" src="img/logo3.png" alt=""/>
      </div>
  </div>
   <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" t-on-click="onClickHome">Home</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"  t-on-click="onClickSignUp">Sign Up</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false" t-on-click="onClickSignin">Sign In</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false" t-on-click="crop">crop</button>
        </li>
      </ul>
</div>       
    </div>`;

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