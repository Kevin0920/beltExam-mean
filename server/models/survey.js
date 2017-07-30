console.log('model running');
var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema(
    {
        question: { type: String },
        author: { type: String },
        optionone: { type: String },
        voteone: { type: Number, default: 0 },
        optiontwo: { type: String },
        votetwo: { type: Number, default: 0 },
        optionthree: { type: String },
        votethree: { type: Number, default: 0 },
        optionfour: { type: String },
        votefour: { type: Number, default: 0 },
    },
    { timestamps: true } );
var Survey = mongoose.model('Survey', SurveySchema);
