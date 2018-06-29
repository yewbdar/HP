const canInterBy = require('./../models/canInterBy');

module.exports = {
    getAll: (req, res) => {
        canInterBy.find({}, '', function (err, docs) {
            if (err)
                console.log("Error:", err);
            else
                res.send(docs);
        });
    }
}