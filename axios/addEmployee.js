const axios = require("axios");

exports.addEmployee = async (req,res) => {
     axios.post("https://dummy.restapiexample.com/api/v1/create")
        .then(response => res.json(response.data))
        .catch(err => res.json(err));
}