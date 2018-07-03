 const positioncontroller = require('./../controllers/position.ctrl');


module.exports = (router) => {

    router.get('/position',(req,res)=>{
        positioncontroller.getAll(req,res);
    });

    router.get('/position/:id',(req,res)=>{
        console.log("api getById");
        positioncontroller.getById(req,res);
    });

    router.post("/position", (req, res) => {
        positioncontroller.create(req, res);
    });

    router.delete('/position/:id',(req,res)=>{
        console.log("api remove");
        positioncontroller.remove(req,res);
    });

    router.put('/position',(req,res)=>{
        console.log("api update");
        positioncontroller.update(req,res);
    });
}