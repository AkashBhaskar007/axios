const axios = require("axios");

exports.updateEmployee = async (req,res) => {
     axios.put("https://dummy.restapiexample.com/api/v1/update/21/")
        .then(response => res.json(response.data))
        .catch(err => res.json(err));
}