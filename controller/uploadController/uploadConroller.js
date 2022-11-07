const fs = require("fs");
const { parse } = require("csv-parse");
const queryService = require('../../services/queryService/queryService');

/**
   * Use to upload information from csv file to db
   * @param {Object} req
   * @param {Object} res
   * @returns {Object} Response
   */
const upload = async (req, res) => {
    try {
        let dataArr = []
        const directoryPath = __basedir + "/public/data-sheet.csv"
        fs.createReadStream(directoryPath)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", (row) => {
                dataArr.push(row)
            })
            .on("close", () => {
                queryService.dataInsert(dataArr)
            });;
        res.status(200).send({
            message: "sit back and relax all info will be uploaded "
        })

    } catch (err) {
        res.status(500).send({
            message: `some error occured -  ${err}`,
        });
    }
};

module.exports = {
    upload
};