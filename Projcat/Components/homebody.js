const { Component,Store, mount } = owl;
const { xml } = owl.tags;

// all content img cover code
// <div style="width:70;-webkit-filter: blur(8px);">
// 			<div class="card bg-dark text-white">
//  				 <img src="img/img4.webp"/>
//  			</div>
//  		</div>

export class homebody extends Component {


static template = xml `
	<div>
		<div class="card mb-3" style="max-width: 1700px; margin-top:20px;">
			<div class="row g-0">
				<div class="col-md-4">
      				<img src="bootstrap4/img/img1.jpeg" alt="..." class="img-thumbnail"/>
   			    </div>
				<div class="col-md-8">
					<div class="card-body">
				        <h5 class="card-title">Card title</h5>
				        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
		     		</div>
		     	</div>
	     	</div>
	     	<div class="row g-0">
				<div class="col-md-4">
      				<img src="bootstrap4/img/img3.jpeg" alt="..." class="img-thumbnail"/>
   			    </div>
				<div class="col-md-8">
					<div class="card-body">
				        <h5 class="card-title">Card title</h5>
				        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
		     		</div>
		     	</div>
	     	</div>
		</div>
	</div>`;
}