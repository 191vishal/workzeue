const { Component,Store, mount } = owl;
const { xml } = owl.tags;


export class Crop extends Component {

  static template = xml`
  <div>
  		<div class="bg-light">
  			<div class="container">
			  <div class="py-5 text-center">
			    <img class="d-block mx-auto mb-4" src="img/logo3.png" alt="" width="100" height="100"/>
			    <h2>Registration Form Template</h2>
			  </div>
			 </div>
  		</div>
  </div>`;
}
