#! /usr/bin/env node         
// Student Management System
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("########### WELCOME TO STUDENT MANAGEMENT SYSTEM ############"));
let studentName = [];
let condition = true;
const student = await inquirer.prompt([
    {
        name: "add",
        message: "Enter Your Full Name",
        type: "input"
    }
]);
let id = "123456789010";
let pass = "";
for (let i = 0; i < 5; i++) {
    let rendom = Math.floor(Math.random() * id.length);
    pass += id[rendom];
}
console.log(`student ID  ${pass}`);
let courses = await inquirer.prompt([
    {
        name: "coursesName",
        message: " which courses do you want to enroll in ",
        type: "list",
        choices: ["C++", "JAVA", "C+", "TYPESCRIPT", "JAVASCRIPT", "none"]
    }
]);
let balance = 20000;
console.log(`your account balance is ${balance}`);
if (courses.coursesName == "none") {
    console.log("kindly select any of the courses");
}
let courcefees = courses.coursesName.length * 4000;
let remaningBalence = balance - courcefees;
let manu = await inquirer.prompt([
    {
        name: "viewManu",
        message: "show status or Exit",
        type: "list",
        choices: ["show status", "Exit"]
    }
]);
if (manu.viewManu == "show status") {
    console.log(chalk.blue(`*************** Show Status ********************`));
    console.log(`Student name is ${chalk.green(student.add)}`);
    console.log(`Student ID is ${chalk.green(pass)}`);
    console.log(`Your current balance ${chalk.green(balance)}`);
    console.log(`The remanig balance is ${chalk.green(remaningBalence)}`);
    console.log(`This is the course that student enrolled in ${chalk.green(courses.coursesName)}`);
    console.log(chalk.bold.yellowBright("Your enrollment is done!!!!!"));
}
else if (manu.viewManu == "Exit") {
    console.log(chalk.red(`++++++++++++++++ Exit +++++++++++++++++++`));
}
