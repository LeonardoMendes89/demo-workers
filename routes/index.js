module.exports = app => {
    app.get('/',app.api.index.getData)
    app.post('/',app.api.index.postData)
}