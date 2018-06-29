 const vacancycontroller = require('./../controllers/vacancy.ctrl');


module.exports = (router) => {

    router.get('/vacancy',(req,res)=>{
        vacancycontroller.getAll(req,res);
    });

    router.get('/vacancy/:id',(req,res)=>{
        console.log("api getById");
        vacancycontroller.getById(req,res);
    });

    router.post("/vacancy-save", (req, res) => {
        console.log("api save");
        console.log(req.body);
         //res.status(200).json();
        vacancycontroller.save(req, res);
    });

    router.delete('/vacancy/:id',(req,res)=>{
        console.log("api remove");
        vacancycontroller.remove(req,res);
    });

    router.put('/vacancy/:id',(req,res)=>{
        console.log("api update");
        vacancycontroller.update(req,res);
    });
}