const queryService = require('../../services/queryService/queryService');

/**
   * Use to search user by its name or from its string
   * @param {Object} req
   * @param {Object} res
   * @returns {Object} Response
   */
const userSearch = async (req, res) => {
    try {
        let userSearch = req.query.userSearchString
        if (userSearch.length < 3) {
            throw new Error('minimum 3 character required');
        }
        let searchResult = await queryService.userSearch(userSearch)

        res.status(200)
            .send({ searchResult: searchResult })

    } catch (err) {
        res.status(500).send({
            message: `error  ${err}`,
        });
    }
};

/**
   * Use to get detail of policies by its user id
   * @param {Object} req
   * @param {Object} res
   * @returns {Object} Response
   */
const policyByUserId = async (req, res) => {
    try {
        let userId = req.params.userId

        let searchResult = await queryService.policyByUserId(userId)

        res.status(200)
            .send({ policyByUserId: searchResult })

    } catch (err) {
        res.status(500).send({
            message: `error  ${err}`,
        });
    }
};

module.exports = {
    userSearch,
    policyByUserId
};