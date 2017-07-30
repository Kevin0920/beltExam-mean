var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');

module.exports = {
    create: function (req, res) {
        var survey = new Survey(req.body);
        survey.save(function (err) {
            if (err){ console.log(err) }
            else { console.log('saved to db') }
        })
    },
    findall: function (req, res) {
        Survey.find({}).exec(function (err, data) {
            if (err){ console.log("error!!!!!", err) }
            else { res.json(data) }
        })
    },
    findone: function (req, res) {
        Survey.findOne({_id: req.body.id}).exec(function (err, data) {
            if (err){ console.log("error!!!!!", err) }
            else { res.json(data) }
        })
    },
    vote: function (req, res) {
        Survey.findOne({_id: req.body.id}, function (err, survey) {
            switch (req.body.number){
                case 'one':
                    survey.voteone ++;
                    break;
                case 'two':
                    survey.votetwo ++;
                    break;
                case 'three':
                    survey.votethree ++;
                    break;
                case 'four':
                    survey.votefour ++;
                    break;
                default: break;
            };
            survey.save(function (err) {
                if (err){
                    console.log("error!!!!!", err)
                }
                else {
                    console.log('answer saved')
                }
            })
        })
    }

}