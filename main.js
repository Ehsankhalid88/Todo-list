

window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector(["#tasks"])
	 todo=[]


   

	form.addEventListener('submit', (e) => {
		e.preventDefault();
	
       
      
    
       
        
     
		const item = input.value;
        //prevent empty values from being added to the list
        if (item === "") {
            todo=[];
            alert("Can not be empty").innerHTML="";
            console.log("failure");
			
        };

		 todo.push(item);
		 localStorage.setItem("todo", JSON.stringify(todo));
         
        
    
          //You can add a new item to the todo list 
	     const task_el = document.createElement('ul');
		 task_el.classList.add('task');
	
         

		const task_content_el = document.createElement('ul');
		task_content_el.classList.add('content');
	

		task_el.prepend(task_content_el);
	
		//localStorage.setItem("list", JSON.stringify(task_el));
		

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = [item];
		task_input_el.setAttribute('readonly', 'readonly');
        task_content_el.prepend(task_input_el);
	
		
           

		const task_actions_el = document.createElement('ul');
		task_actions_el.classList.add('actions');
		//Added Edit buttom
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';
        //Added delete buttom
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete!';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);
		
		

     //the todo list must show the most recently added item first on the list
		list_el.prepend(task_el);
		//localStorage.setItem("todoss", JSON.stringify(list_el));


		input.value = '';
     // edit an item in the todo list 
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save Edit";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});
    //remove an item from the todo list
		task_delete_el.addEventListener('click', () => {
            if (confirm("Delet" )){
                list_el.removeChild(task_el);
                
            }
        }
        );
    
        });
		

      
});





