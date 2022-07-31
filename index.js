const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'minnasota',
        database: 'employee_db',
    },
);
db.connect(function(err){
    if (err) throw err;
    console.log("Connected as id'+ db.threadID");
})

function startEmployee(){
    inquirer.prompt({
        type:'list',
        name:'options',
        message:'What would you like to do?',
        choices:[
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Exit'
        ]
    })
    .then((res) => {
        console.log(res.options);
        switch(res.options){
            case 'View All Departments':
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break
            case 'Add Department':
                addDepartment();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'Exit':
                db.end();
                break;

        }
    });
}

function viewAllDepartments(){
    let query = "SELECT * FROM department";
    db.query(query, function(err,res){
        if(err) throw err;
        console.table(res);
        startEmployee();
    })
}

function viewAllRoles(){
    let query = "SELECT * FROM role"
    db.query(query, function(err,res){
        if(err) throw err;
        console.table(res);
        startEmployee();
    })
}

function addDepartment(){
    inquirer.prompt({
        type:'input',
        name:'department',
        message:'Please enter the department you want to add.'
    })
    .then((res) => {
        let query = 'INSERT INTO department SET?';
        db.query(query, {department:res.department},(err,res) => {
            if(err) throw err;
            startEmployee();
        });
    });
}

function addRole(){
    inquirer.prompt([
        {
            type:'input',
            name:'role',
            message:'Please enter the role you want to add.'
        },
        {
            type:'number',
            name:'salary',
            message:'Please enter the salary of the role.'
        },
        {
            type:'input',
            name:'dpartment',
            message:''
        }
    ]);
}

startEmployee();