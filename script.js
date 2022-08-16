var app = new Vue({
  el: "#app",
  data: {
    newTodoTitle: "",
    completedAmount: 0,
    todoList: [
      { id: 1, title: "buy 2 forks", completed: false },
      { id: 2, title: "sell all tomatos", completed: false },
      { id: 3, title: "visit dantist", completed: false },
      { id: 4, title: "jump as high as i can", completed: false },
    ],
  },
  methods: {
    addTodo() {
      if (this.newTodoTitle.trim()) {
        this.todoList.push({
          id: Date.now(),
          title: this.newTodoTitle,
          completed: false,
        });
        this.newTodoTitle = "";
      }
    },
    removeTodo(id) {
      this.todoList = this.todoList.filter((item) => item.id !== id);
    },
    changeCompleted(item) {
      item.completed = !item.completed;
    },
  },
  computed: {
    getCompletedAmount() {
      this.completedAmount = 0;
      this.todoList.forEach((item) =>
        item.completed === true
          ? (this.completedAmount = this.completedAmount + 1)
          : null
      );
      console.log(this.completedAmount);
      return this.completedAmount;
    },
  },
});
