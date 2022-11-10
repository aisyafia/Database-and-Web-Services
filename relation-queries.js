const { user, todolist, todoitem, sequelize } = require("./models");

const listWithUsers = async () => {
  const listplususer = await todolist.findAll({
    raw: true,
    include: [{ model: user, attributes: ["name"] }],
  });
  console.log(listplususer);
  sequelize.close();
};

// listWithUsers();

const getOneUserWithList = async (id) => {
  const oneUserWithList = await user.findByPk(id, {
    include: [
      {
        model: todolist,
        attributes: ["name"],
        include: [{ model: todoitem, attributes: ["task"] }],
      },
    ],
  });
  console.log(JSON.stringify(oneUserWithList));
  sequelize.close();
};

getOneUserWithList(4);
