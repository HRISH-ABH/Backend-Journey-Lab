const express=require('express');

const app=express();
app.use(express.json());  //to not get undefiend in req.body

const notes=[];
app.get('/',(req,res)=>{
    res.send("Hello Cohort!!")
});


app.post('/notes',(req,res)=>{
console.log(req.body);
notes.push(req.body);
res.send(
    "Data recieved :" +
      res.json({ message: "notes added successfully", length:notes.length,notes: notes })
  ); 
});


app.get('/notes',(req,res)=>{
res.json(notes);
})


app.delete('/notes/:index',(req,res)=>{

    const index=req.params.index;

    delete notes[index];
    res.json({
        message:"The notea at index :"+index+" was deleted successfully!!",
    })
})


app.patch('/notes/:idx',(req,res)=>{
    const index=req.params.idx;
    const {title}=req.body;

    notes[index]['title']=title;

    res.json({
        message:"the title of note at index :"+index+" was changed",
    })
})
app.listen(3000,()=>{
    console.log("Server is running at 3000 port");
    
})