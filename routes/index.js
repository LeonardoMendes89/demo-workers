module.exports = app => {
    app.get('/',app.api.index.getData)
    app.get('/:id',app.api.index.getDataById)
    app.post('/',app.api.index.postData)
    app.put('/?',app.api.index.putData)
    app.delete('/?',app.api.index.deleteData)
}