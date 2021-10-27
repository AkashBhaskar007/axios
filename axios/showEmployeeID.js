const axios = require("axios");

exports.showEmployeeID = async (req, res) => {
        await axios.get("https://dummy.restapiexample.com/api/v1/employees/2")
                .then(response => res.json(response.data))
                .catch(err => res.json(err));
}