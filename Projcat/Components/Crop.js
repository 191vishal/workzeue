const { Component,Store, mount } = owl;
const { xml } = owl.tags;


export class Crop extends Component {

  async _onSubmitForm (ev) {
    debugger;
    const xhr = new window.XMLHttpRequest();
    xhr.open('POST', '/do_crop');
    const formData = new FormData(ev.currentTarget);
    xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
    xhr.onload = async () => {
      console.log(JSON.parse(xhr.response));
        };
  _onCropForm(ev){
            const xhr = new window.XMLHttpRequest();
            xhr.open('POST', '/do_crop');
            const formData = new FormData(ev.currentTarget);
            xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
            xhr.onload = async () => {
                if (xhr.status === 200) {
                    this.env.router.navigate({to: 'signin'});
                }
            };
        }
  }
  static template = xml`
  <div style="height:45em;">
    <br/>
      <div class="d-flex justify-content-center" style="height:43em;">
        <div class="card"  style="width:42em;">
      		<div class="bg-light">
      			<div class="container">
    			  <div class="py-5 text-center">
    			    <img class="d-block mx-auto mb-4" src="bootstrap4/img/logo1.png" alt="" width="100" height="100"/>
    			    <h2>Crop Detail From</h2>
    			  </div>
    			 </div>
      		</div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <form action="/crop" t-on-submit.prevent="_onCropForm">
                  <div class="form-group">
                    <label for="cropname">Crop Name</label>
                    <input type="text" class="form-control" name="cropname" placeholder="Your Crop Name" required="true" />
                  </div>
                  <div class="form-group">
                    <label for="detail">Crop Detail</label>
                    <i class="fas fa-info-circle"></i>
                    <input type="text area" class="form-control" name="cropdetail" placeholder="Your Crop Detail" required="true" />
                  </div>
                  <div class="form-group">
                    <label for="place">Crop Place</label>
                    <i class="fas fa-place-of-worship"></i>
                    <input type="text" class="form-control" name="cropplace" placeholder="Your Crop Place" required="true" />
                  </div>
                  <div class="form-group">
                    <label for="qty">Quantity</label>
                    <i class="fas fa-balance-scale"></i>
                    <input type="text" class="form-control form-icon-trailing" name="quantity" placeholder="Your Crop Quantity In  KG" required="true" />
                  </div>
                  <div class="form-group">
                    <label for="category">Category</label>
                    <i class="fas fa-tag"></i>
                      <select class="form-control " name="category" id="role" required="true">
                        <option value="">Choose Crop Category...</option>
                        <option>Bins</option>
                        <option>Grain</option>
                        <option>Vegetable</option>
                      </select>
                  </div>
                  <br/>
                  <div class="row">
                    <input type="submit" class="btn btn-primary btn-lg btn-block" value="submit"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>`;

  
}
