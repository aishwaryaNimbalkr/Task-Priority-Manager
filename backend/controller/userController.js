const TaskManager = require('../model/model');

exports.getTask =async(req,res)=>{
    const tasks = await TaskManager.find().sort({ priority: 1, completed: 1 });
    res.json(tasks);
}
exports.posttTask =async(req,res)=>{
    const newTask = new TaskManager(req.body);
    await newTask.save();
    res.status(201).json(newTask);
}
exports.puttTask =async(req,res)=>{
    const updatedTask = await TaskManager.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
}
exports.deleteTask =async(req,res)=>{
    await TaskManager.findByIdAndDelete(req.params.id);
    res.status(204).send();
}