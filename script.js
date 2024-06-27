document.addEventListener('DOMContentLoaded',()=>{
    const todoinput = document.getElementById('todoinput');
    const todolist = document.getElementById('todolist');
    const todoform = document.getElementById('todoform')

    todoform.addEventListener('submit', (e)=>{
     e.preventDefault()
     addtodo(todoinput.value)
    })
    
    const addtodo = (task)=>{
        const li = document.createElement('li');
        li.textContent = task
        const completebutton = document.createElement('button')
        completebutton.textContent = '✓'
        completebutton.addEventListener('click', ()=>{
            li.classList.toggle('completed')
        })
        const deletebutton = document.createElement('button')
        deletebutton.textContent = '✗'
        deletebutton.addEventListener('click', ()=>{
            li.remove()
        })
        li.appendChild(completebutton)
        li.appendChild(deletebutton)
        todolist.appendChild(li)
        todoinput.value = ''
    }
})