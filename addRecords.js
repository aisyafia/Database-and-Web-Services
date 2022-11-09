const { sequelize } = require("./models");

const User = require("./models").user;
const ToDoList = require("./models").todolist;
const ToDoItem = require("./models").todoitem;

const createOneUser = async () => {
  const newUser = await User.create({
    name: "Lutfia",
    email: "fia@aisya.com",
    phone: 987654,
    password: "try",
  });

  const newUsersList = await ToDoList.create({
    name: `${newUser.name}'s List`,
  });

  console.log(newUser.toJSON(), newUsersList.toJSON());
  sequelize.close();
};

// createOneUser();

const createNewToDoItems = async () => {
  const newItems = await ToDoItem.create({
    task: "Clean bedroom",
    deadline: "Every morning",
    important: false,
  });

  const newItem2 = await ToDoItem.create({
    task: "Learn to code",
    deadline: "Everyday",
    important: true,
  });

  const newItem3 = await ToDoItem.create({
    task: "Bake pumpkin cake",
    deadline: "Sunday",
    important: false,
  });

  console.log(newItems.toJSON(), newItem2.toJSON(), newItem3.toJSON());
  sequelize.close();
};

createNewToDoItems();
