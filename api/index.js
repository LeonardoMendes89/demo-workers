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

    const postData = async(req,res) => {
        const { workername, workerjob, workersalary, workersector } = req.body

        if( !workername || !workerjob || !workersalary || !workersector ) return res.status(400).json({msg: "The fields value can't be empty!"})
    
        return await db('workeradmin').insert({ workername, workerjob, workersalary, workersector })
                                     .then(_      => res.status(201).json({msg: 'data inserted with success!'}))
                                     .catch(err   => res.status(500).json(err) )
    }


return { getData , postData }
}