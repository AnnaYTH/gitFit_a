import React from "react";
import { Link } from "react-router-dom"

class MealplanPreview extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { mealplans } = this.props;

        return(
            <div className="mealplan-pre-container">
                <h1 className="mealplan-pre-head">My Meal Plans</h1>
                <div>
                {mealplans.map((mealplan,idx) => {
                    return(
                        <Link key={idx} className="mealplan-pre-link" to={`/mealplans/${mealplan._id}`}>
                            <h1 className="mealplan-pre-name">{mealplan.name}</h1>
                            <p className="mealplan-pre-type">Meal Plan Goal: {mealplan.mealplanType}</p>
                            <p className="mealplan-pre-desc">{mealplan.description}</p>
                        </Link>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default MealplanPreview;