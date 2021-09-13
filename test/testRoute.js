const file = require('../knexfile')['development']
const db   = require('knex')(file)

const express    = require('express')
const testRouter = express.Router()

testRouter.route('/').get(async(req,res)=>{

    await db('workeradmin').select(['workername','workerjob','workersalary','workersector'])
                           .then(data   => res.status(200).json(data))
                           .catch(err   => res.status(500).json(err) )

}).post(async(req,res)=>{



})

testRouter.route('/:id').delete(async(req,res)=>{



}).put(async(req,res)=>{



})

module.exports = testRouter

