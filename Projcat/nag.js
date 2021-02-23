const { Component,Store, mount } = owl;
const { xml } = owl.tags;

export class Nav extends Component {


static template = xml `
		<div class="task-list" id="task-list">
			<div class="home-wrap">
  				<div class="login-html">
  					<div class="navbar">
  						<a href="#">About As</a>
  						
  						<a id="cnt" href="#contect">Contect</a>
  						<input type="button" value="Sign up" t-on-click="onClickSignUp"/>
					</div>
  				</div>
  			</div>		
		</div>`;

		async onClickSignUp(ev){
			 await this.env.router.navigate({to:'signup'});
		}
}