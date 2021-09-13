const db = require('../db/db')

module.exports = app => {

    const getData = async(req,res) => {
        await db('workeradmin')
                    .select(['workername',
                             'workerjob',
                             'workersalary',
                             'workersector'])
                    .then(data   => res.status(200).json(data))
                    .catch(err   => res.status(500).json(err) )
    }


return { getData }
}