const model = require('../../models/index')

//for inserting csv data in mongoDb
const dataInsert = async (data) => {
    try {
        for (let i = 0; i < data.length; i++) {

            let agentId = await model.agentInfoModel.findOne({
                agentName: data[i][0]
            })
            let categoryId = await model.policyCategoryModel.findOne({
                categoryName: data[i][9]
            })
            let companyId = await model.policyCarrierModel.findOne({
                companyName: data[i][8]
            })

           //avoing duplicate names
            if (!agentId) {
                let agentObj = new model.agentInfoModel({
                    agentName: data[i][0],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                })
                agentObj = await agentObj.save()
                agentId = agentObj._id
            } else {
                agentId = agentId._id
            }

            //avoiding duplicate category
            if (!categoryId) {
                let policyCategoryObj = new model.policyCategoryModel({
                    categoryName: data[i][9],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                })
                policyCategoryObj = await policyCategoryObj.save()
                categoryId = policyCategoryObj._id
            } else {
                categoryId = categoryId._id
            }

            //avoiding duplicate company name
            if (!companyId) {
                let policyCarrierObj = new model.policyCarrierModel({
                    companyName: data[i][8],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                })
                policyCarrierObj = await policyCarrierObj.save()
                companyId = policyCarrierObj._id
            } else {
                companyId = companyId._id
            }

            let userObj = new model.user({
                userName: data[i][16],
                DOB: data[i][23],
                address: data[i][20],
                phoneNo: data[i][19],
                state: data[i][21],
                zipCode: data[i][22],
                email: data[i][14],
                gender: data[i][15],
                userType: data[i][1],
                createdAt: new Date(),
                updatedAt: new Date(),
            })

            let userId = await userObj.save()
            userId = userId._id

            let userAccountNameObj = new model.userAccountModel({
                userId: userId,
                userAccountName: data[i][13],
                createdAt: new Date(),
                updatedAt: new Date(),
            })

            let policyInfoObj = new model.PolicyInfo({
                policyNumber: data[i][4],
                policyStartDate: data[i][10],
                policyEndDate: data[i][11],
                policyCatId: categoryId,
                companyId: companyId,
                userId: userId
            })

            await userAccountNameObj.save()
            await policyInfoObj.save()
        }

    } catch (err) {
        console.log(err)
    }
}

const userSearch = async (userName) => {
    try {

        let aggregateCondition = [
            {
                "$match": { "userName": { "$regex": "" + userName + "", '$options': 'i' } }
            },
            {
                "$lookup": {
                    "from": 'policyInfo',
                    "localField": '_id',
                    "foreignField": 'userId',
                    "as": 'policyInfo'
                },
            },
            {
                "$unwind": "$policyInfo"
            },
            {
                "$lookup": {
                    "from": 'policyCarrier',
                    "localField": 'policyInfo.companyId',
                    "foreignField": '_id',
                    "as": 'companyInfo'
                },
            },
            {
                "$unwind": "$companyInfo"
            },
            {
                "$lookup": {
                    "from": 'policyCategory',
                    "localField": 'policyInfo.policyCatId',
                    "foreignField": '_id',
                    "as": 'categoryInfo'
                },
            },
            {
                "$unwind": "$categoryInfo"
            },
            {
                "$project": {
                    "_id": 1,
                    "userName": 1,
                    "DOB": 1,
                    "address": 1,
                    "email": 1,
                    "policyInfo._id": 1,
                    "policyInfo.policyNumber": 1,
                    "policyInfo.policyStartDate": 1,
                    "policyInfo.policyEndDate": 1,
                    "policyInfo.policyNumber": 1,
                    "companyInfo.companyName": 1,
                    "categoryInfo.categoryName": 1
                }
            }]

        let result = await model.user.aggregate(aggregateCondition)

        if (result) {
            return result
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
}

const policyByUserId = async (userId) => {
    try {

        let condition = { userId: userId }
        let result = await model.PolicyInfo.find(condition)
            .populate([
                {
                    "path": "policyCatId",
                    "select": {
                        "categoryName": 1,
                    },
                },
                {
                    "path": "companyId",
                    "select": {
                        "companyName": 1,
                    },
                }
            ])

        if (result) {
            return result
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    dataInsert: dataInsert,
    userSearch: userSearch,
    policyByUserId: policyByUserId

}