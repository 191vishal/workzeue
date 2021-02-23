const { Component, mount } = owl;
const { xml } = owl.tags;

class Forget extends Component {
  static template = xml`
  	<div class="task-list" id="task-list">
  		<div class="forgor-wrap">
  			<div class="login-html">
  				<div class="login-form">
  					<div class="login-in-htm">
  						<div class="group">
							<label for="user" class="label">Username</label>
							<input id="user" type="mail" class="input"/>
						</div>
						<div class="group">
							<input type="submit" class="button" value="submit"/>
						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>`;
}

function setup() {
const fergat=new Forget ();
fergat.mount(document.body);
}

whenReady(setup);

