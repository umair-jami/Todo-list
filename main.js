#! usr/bin/env node
import inquirer from "inquirer";
//simple todo list
// let todos=[]
// let condition=true
// while(condition){
//     let addTask=await inquirer.prompt(
//         [
//             {
//                 name:"todo",
//                 type:"input",
//                 message:"What you want to add in your Todos?"
//             },
//             {
//                 name:"addMore",
//                 type:"confirm",
//                 message:"Do you want to add more",
//                 default:"false"
//             }
//         ]
//     ) 
//     todos.push(addTask.todo)
//     condition=addTask.addMore
//     console.log(todos)
// }
const todos = [];
while (true) {
    const addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add More?",
            default: false
        },
    ]);
    if (addTask.todo.trim() === "") {
        console.log("Please insert a valid item.");
        continue; // Skip adding an empty task
    }
    todos.push(addTask.todo);
    if (!addTask.addMore) {
        break;
    }
    console.log("Your Todos:");
    todos.forEach((task, index) => {
        console.log(`${index + 1} . ${task}`);
    });
}
const removeTask = await inquirer.prompt([
    {
        name: "remove",
        type: "confirm",
        message: "Do you want to remove a task?",
        default: false
    }
]);
if (removeTask.remove) {
    const removeIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the task you want to remove:"
        }
    ]);
    if (removeIndex.index >= 1 && removeIndex.index <= todos.length) {
        todos.splice(removeIndex.index - 1, 1);
        console.log("Task removes successfully!");
        console.log("Remaining items in the array:");
        todos.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
    else {
        console.log("invlid index. Task removal failed.");
    }
}
