// import express module

const express = require('express');
const bodyParser = require('body-parser')
const jsonBodyParsor = bodyParser.json();
const app=express();
to_doList=[
    {"userId":1,"id":1,"title":"Create Contact Button","status":true},
    {"userId":1,"id":2,"title":"Create About Page","status":true},
    {"userId":1,"id":3,"title":"Create Service Button","status":false}

]
app.get('/',(req,res)=>{
    res.send('Hello  World!');
})

app.get("/tasks",(req,res)=>{
    
res.status(200).send(to_doList);
})

app.get("/tasks/:id",jsonBodyParsor,(req,res)=>{
    const params = req.params;
    const id = params['id'];

    for(let todo of to_doList){
        //console.log(todo);
        if(todo.id == id){
            res.status(200).send(todo);
        }
    }
        res.status(200).send("Item not Found");
    })
    // create Task

    app.post('/tasks',(req,res)=>{
        const params = req.query;
       // console.log(params['id'])
       to_doList.push(params);
      res.status(201).send("To do is created");

    })

    // Update

    app.put('/tasks/:id',(req,res)=>{

        console.log(req.body)
        res.status(200).send('update')
    })
    //Delete

    

    app.delete("/tasks",(req,res)=>{
    
        res.status(200).send(to_doList);
        })
        
        app.delete("/tasks/:id",jsonBodyParsor,(req,res)=>{
            const params = req.params;
            const id = params['id'];
        
            for(let todo of to_doList){
                //console.log(todo);
                if(todo.id == -1){
                    res.status(200).send(todo);
                }
            }
                res.status(200).send("The task with given ID was not found.");
        });
       

app.listen(5000, function(){
console.log("Listening")
})

