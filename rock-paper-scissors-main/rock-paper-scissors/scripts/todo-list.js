console.log('hello!');
//const toDoList = ['make diner', 'meet oleksiy', 'have fun', 'ableton', 'GSAP'];
const toDoList = [
  {
    name: 'Make dinner',
    dueDate:'2026.06.14',
  },
  {
    name: 'and here one more',
    dueDate:'2016.07.14',
  },
];
const container = document.querySelector('.container');


// IMPORTANT -!!! (RENDER FUNCTION + HTML 'FOR LOOP' GENERETION) 
renderToDoList();

function renderToDoList(){
  let todoListHTML ='';

  for(let i = 0; i < toDoList.length; i++){
    const todoObject = toDoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
       
    const html = 
    ` <div class="todo">${i+1}.${name}</div>
      <div class="todo">${dueDate}</div>
        <button class="delete-button" 
          onclick="
            toDoList.splice(${i}, 1); 
            renderToDoList();
          "> Delete
        </button>
    `;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  container.innerHTML = `${todoListHTML}`;
  console.log(container)
}
// IMPORTANT -!!! 


function addToDo(){
  const jsInput = document.querySelector('.js-name-input');
  const name = jsInput.value;
  const dateInput = document.querySelector('.js-due-date-input');
  const dueDate = dateInput.value;


  toDoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
  jsInput.value = '';
  renderToDoList();
}

function handleCostKeydown(event){
  if(event.key === 'Enter'){
  addToDo();
  }; 
}

