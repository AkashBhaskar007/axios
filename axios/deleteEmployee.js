const axios = require("axios");

exports.deleteEmployee = async (req, res) => {
    axios.delete("https://dummy.restapiexample.com/api/v1/delete/2")
        .then(response => res.json(response.data))
        .catch(err => res.json(err));
}