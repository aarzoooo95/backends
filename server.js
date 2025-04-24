const express = require ('express');
const app=express();
const PORT = process.env.PORT||3000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Server is running");
});

app.post('/login', (req,res)=>{
    const{email,password}=req.body;
    if(!email|| email.trim()===''){
        res.status(400).json("Email cannot be empty");
    };
    if(!password){
        res.status(400).json("Password cannot be empty");
    };
    res.status(201).json({
        message:"User added sucessfully",
        user:{email}
    });

});
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});