function handleUpdateTodo(id) {
    const todoTextElement = document.getElementById(`todo-text-${id}`);
    const currentTodoValue = todoTextElement.textContent;
     const newTodoValue = prompt("Update your to-do:", currentTodoValue);
    if (newTodoValue && newTodoValue.trim() !== "") {
        todoTextElement.textContent = newTodoValue;
        const todoIndex = todos.findIndex(todo => todo.id === id);
        if (todoIndex > -1) {
            todos[todoIndex].todoValue = newTodoValue;
        }
      
    }
}
