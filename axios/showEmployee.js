const axios = require("axios");

exports.showEmployee = async (req, res) => {
        await axios.get("https://dummy.restapiexample.com/api/v1/employees")
                .then(response => {
                        console.log(response.data)
                        res.json(response.data)
                })
                .catch(err => res.json(err));
}