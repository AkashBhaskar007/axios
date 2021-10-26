const axios = require("axios");

exports.showEmployee = async (req, res) => {
        axios.delete("https://dummy.restapiexample.com/api/v1/employees")
                .then(response => res.json(response.data))
                .catch(err => res.json(err));
}