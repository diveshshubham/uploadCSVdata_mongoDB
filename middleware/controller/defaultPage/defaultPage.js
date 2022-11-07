const homePage = async (req, res) => {
    res.status(200).send({
        message: " 👋 Hi, Welcome here "
    })
}
module.exports = { homePage }
