const { Component, mount } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const {useRef, useState,useStore} = owl.hooks;

class App extends Component {
  static template = xml/* xml */ `
    <div class="task-list" id="task-list">
    	<h1><center>V-Mart</center></h1>
    	<input type="text" name="search" id="search" t-on-keyup="searchFunction()" placeholder="Search"/>
        <t t-foreach="tasks" t-as="task" t-key="task.id">
            <div class="task">
            	<span><t t-esc="task.name"/></span>
            	<span><t t-esc="task.price"/></span>
                <input type="button" t-att-id="task.id" value="Add To Cart" t-on-click="addTask"/>
            </div>
        </t>
        <div class="tas">
        	<t t-set="total" t-value="0"/>
        		<center><h1> _Add To Cart _ </h1></center>
        			<t t-foreach="bp" t-as="i" t-key="i.id">
        				<t t-set="total" t-value="total+tasks[i.title-1].price"/>
        				<ui>
        				<li>
        				<span t-esc="tasks[i.title-1].name"></span>
        				<span t-esc="tasks[i.title-1].price"></span></li>
        				<li>
        				<input type="button" value="Delete" t-att-id="i.title" t-on-click="deleteTask"/></	xli>
        				<br></br>
        				</ui>
        			</t>
        			<span>Total<t t-esc="total"/></span>
        </div> 
    </div>`;

    addTask(ev) {
        const title = ev.target.id;
        if (title && (!this.bp.find(t => parseInt(t.title) == parseInt(title)))) {
            const newTask = {
                title: title,
            };
            this.bp.push(newTask);
        }
    }
    deleteTask(ev) {
    	const index = this.bp.findIndex(t => t.title === ev.target.id);
    	this.bp.splice(index, 1);
	}

	 searchFunction() {
            var input, filter, mainDiv, div, childDiv, i, txtValue;
            input = document.getElementById("search").value;
            filter = input.toUpperCase();
            mainDiv = document.getElementById("task-list");
            div = mainDiv.getElementsByClassName("task");
            for (i = 0; i < div.length; i++) {
                childDiv = div[i].getElementsByTagName("span")[0];
                if (childDiv) {
                    txtValue = childDiv.textContent || childDiv.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        div[i].style.display = "";
                    } else {
                        div[i].style.display = "none";
                    }
                }
            }
        }
    bp = useState([]);

  tasks = [
    {
      id: 1,	
      name: " Mobail  ",
      price: 20000,
    },
    {
      id: 2,
      name: " TV ",
      price: 15000,
    },
    {
      id: 3,
      name: "Clean House",
      price: 2000,
    },
  ];
}
function setup() {
	const app=new App();
	app.mount(document.body)
}

whenReady(setup);