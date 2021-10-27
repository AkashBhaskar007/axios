const axios = require("axios");

exports.updateEmployee = async (req, res) => {
        let { name, salary, age } = req.body
        updateData = {
                name,
                salary,
                age
        }
        await axios.put("https://dummy.restapiexample.com/api/v1/update/21/", updateData)
                .then(response => {
                        console.log(updateData),
                        res.json(response.data)
                })
                .catch(err => res.json(err));
}