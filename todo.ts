interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

class TodoList {
    private todos: Todo[] = [];
    private nextId: number = 1;

    add(title: string): void {
        const newTodo: Todo = { id: this.nextId++, title, completed: false };
        this.todos.push(newTodo);
        console.log(`Added: ${title}`);
    }

    list(): void {
        console.log("Todo List:");
        this.todos.forEach(todo => {
            console.log(`${todo.id}. [${todo.completed ? "x" : " "}] ${todo.title}`);
        });
    }

    complete(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Completed: ${todo.title}`);
        } else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }

    delete(id: number): void {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            const deleted = this.todos.splice(index, 1)[0];
            console.log(`Deleted: ${deleted.title}`);
        } else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
}

// Example usage
const todoList = new TodoList();
todoList.add("Learn TypeScript");
todoList.add("Write a TypeScript app");
todoList.list();
todoList.complete(1);
todoList.list();
todoList.delete(2);
todoList.list();
