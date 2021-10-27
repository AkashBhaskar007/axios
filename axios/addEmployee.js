const axios = require("axios");

exports.addEmployee = async (req, res) => {
        let { name, salary, age } = req.body
        newData = {
                name,
                salary,
                age
        }
        await axios.post("https://dummy.restapiexample.com/api/v1/create", newData)
                .then(response => {
                        console.log(newData),
                        (response.newData)
                })
                .catch(err => res.json(err));
}