const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    mealplan: {
        type: Schema.Types.ObjectId,
        ref: 'mealplans'
    },
    name: {
        type: String,
        required: true
    },
    mealType: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    carbs: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: "",
    },
    photo: {
        type: String
    },
    ingredients: {
        type: String,
        required: true
    }
});

module.exports = Meal = mongoose.model('meal', MealSchema);