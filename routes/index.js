module.exports = app => {
    app.get('/',app.api.index.getData)
}