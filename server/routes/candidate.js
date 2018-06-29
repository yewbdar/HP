const CandidateController = require('./../controllers/candidate.ctrl');
module.exports = (router) => {

    router.get('/candidate',(req,res)=>{
        CandidateController.getAll(req,res);
    });

    router.get('/candidate/:id',(req,res)=>{
        console.log("api getById");
        CandidateController.getById(req,res);
    });

    router.post("/candidate-save", (req, res) => {
        console.log("api save");
        console.log(req.body);
        //res.status(200).json();
        CandidateController.save(req, res);
    });

    router.delete('/candidate/:id',(req,res)=>{
        console.log("api remove");
        CandidateController.remove(req,res);
    });

    router.put('/candidate/:id',(req,res)=>{
        console.log("api update");
        CandidateController.update(req,res);
    });

}