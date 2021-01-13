const { Component, Store, mount } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useRef, useDispatch, useState, useStore } = owl.hooks;

const actions = {
       addTask({ state }, title) {
           if (title && (!state.cart.find(n => parseInt(n.title) == parseInt(title)))) {
               const newTask = {
                   title:title,
               };
               state.cart.push(newTask);
           }
       },
       deleteTask({state},title){
           const index = state.cart.findIndex((n)=> n.title == title);
           state.cart.splice(index,1);
       },
};



const APP_TEMPLATE = xml/* xml */ `
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
                    <t t-foreach="cart" t-as="i" t-key="i.id">
                        <t t-set="total" t-value="total+tasks[i.title-1].price"/>
                        <ui>
                        <li>
                        <span t-esc="tasks[i.title-1].name"></span>
                        <span t-esc="tasks[i.title-1].price"></span></li>
                        <li>
                        <input type="button" value="Delete" t-att-id="i.title" t-on-click="deleteTask"/></li>
                        <br></br>
                        </ui>
                    </t>
                    <span>Total<t t-esc="total"/></span>
        </div> 
    </div>`;

const initialState ={
    cart : []
};

class App extends Component {
    static template = APP_TEMPLATE;

    cart = useStore((state) => state.cart);
   dispatch = useDispatch();
  

    addTask(ev) {
        if(ev.target.id){
            this.dispatch("addTask",ev.target.id);
        }
    }
    deleteTask(ev) {
            this.dispatch("deleteTask",ev.target.id);
	}

	 searchFunction() 
     {
        var input, filter, mainDiv, div, childDiv, i, txtValue;
        input = document.getElementById("search").value;
        filter = input.toUpperCase();
        mainDiv = document.getElementById("task-list");
        div = mainDiv.getElementsByClassName("task");
        for (i = 0; i < div.length; i++)
        {
            childDiv = div[i].getElementsByTagName("span")[0];
            if (childDiv) 
            {
                txtValue = childDiv.textContent || childDiv.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) 
                {
                    div[i].style.display = "";
                } 
                else 
                {
                    div[i].style.display = "none";
                }
            }
        }
    }

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
    {
      id: 4,
      name: "AC",
      price: 20000,
    },
  ];
}

function makeStore() {
 const localState = window.localStorage.getItem("vishal");
 const state = localState ? JSON.parse(localState) : initialState;
 const store = new Store({ state , actions });
 store.on("update", null, () => {
   localStorage.setItem("vishal", JSON.stringify(store.state));
 });
 return store;
}
function setup() {
    App.env.store = makeStore();
	const app=new App();
	app.mount(document.body)
}

whenReady(setup);