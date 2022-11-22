const tasks = require("../Controller/tasksController");
const task = require("../model/Tasks");

//ADD OR CREATE TASKS
exports.createNewTask = async (req, res) => {
  try {
    let task = await req.body;
    let created = await Task.created(task);
    if (!created) return res.status(400).json({
      status: false,
      message: "Task Creation failed"
    });

    return res.status(200).json({
      status: true,
      mesage: "Task created successfully",
      user: created
    });

  }
  catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    })
  }

};

//UPDATE TASKS
exports.updateTask = async (req, res) => {
  
}
//DELETE TASKS

//RETRIEVE OR GET ALL TASKS
exports.getAllTasks = async (req, res) => {

  try {
    let tasks = await tasks.find()
    if (tasks.length === 0)
      return res.status(404).json({
        status: false,
        message: "tasks not found"
      });
    res.status(200).json({
      success: true,
      message: "tasks found",
      task
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal error server",
      error: error.message,
    })

  }


}