        const taskInput = document.getElementById('task-input');
        const addBtn = document.getElementById('add-btn');
        const list = document.getElementById('tarefa-lista');

        function addTask() {
            const taskText = taskInput.value.trim();
            
            if (taskText === "") {
                alert("Por favor, digite uma tarefa!");
                return;
            }

            const li = document.createElement('li');
            li.classList.add('tarefa'); 
            li.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.className = 'btn-delete'; 
            
            deleteBtn.addEventListener('click', function() {
                list.removeChild(li);
            });

            li.appendChild(deleteBtn);
            list.appendChild(li);

            taskInput.value = "";
        }

        addBtn.addEventListener('click', addTask);

        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });