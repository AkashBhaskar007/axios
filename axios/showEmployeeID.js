const axios = require("axios");

exports.showEmployeeID = async (req,res) => {
     axios.get("https://dummy.restapiexample.com/api/v1/employees/1")
        .then(response => res.json(response.data))
        .catch(err => res.json(err));
}