const file = require('../knexfile')['production']
const db   = require('knex')(file)

const express    = require('express')
const testRouter = express.Router()

testRouter.route('/').get(async(req,res)=>{

    await db('workeradmin').select(['workername','workerjob','workersalary','workersector'])
                           .then(data   => res.status(200).json(data))
                           .catch(err   => res.status(500).json(err) )

}).post(async(req,res)=>{

    const { workername, workerjob, workersalary, workersector } = req.body

    if( !workername || !workerjob || !workersalary || !workersector ) return res.status(400).json({msg: " The fields value can't be empty! "})
   
    return await db('workeradmin').insert({ workername, workerjob, workersalary, workersector })
                                  .then(_      => res.status(201).json({msg: 'data inserted with success!'}))
                                  .catch(err   => res.status(500).json(err) )

})

testRouter.route('/:id').delete(async(req,res)=>{

    const { id } = req.body

    return await db('workeradmin').where(id).delete()
                                  .then(_      => res.status(204).json())
                                  .catch(err   => res.status(500).json(err) )    

}).put(async(req,res)=>{



})

module.exports = testRouter

