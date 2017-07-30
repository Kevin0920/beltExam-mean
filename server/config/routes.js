var survey = require('../controller/controller.js');

module.exports = function (app) {
    app.post('/create', survey.create);
    app.get('/polls', survey.findall);
    app.post('/poll', survey.findone);
    app.post('/vote', survey.vote)

    app.all("*", (req,res) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
}
