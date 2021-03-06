const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema ({

    workout: {
        type: Schema.Types.ObjectId,
        ref: 'workouts'
    },
    bodyPart: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    targetRep: {
        type: Number,
        default: 10
    },
    sets: {
        type: Number,
        default: 3
    },
    photoUrl: {
        type: String
    }

});

module.exports = Exercise = mongoose.model('exercise', ExerciseSchema);