import React from "react";
import {Link} from 'react-router-dom';

import './HomeItem.css';

import Card from "../shared/components/UiElements/Card";
import Avatar from '../shared/components/UiElements/Avatar';

const HomeItem = (props) => {
    return <li className="recipe-item">
        <Link to={`/recipe/${props.id}`} className="recipe-item__link">
        <Card className="recipe-item__content">
            <div className="recipe-item__image">   
                <Avatar image={props.image} alt={props.title}/>
            </div>
            <div className="recipe-item__info">
            <h2>{props.title}</h2>
            </div>  
        </Card>
        </Link>
    </li>
}

export default HomeItem;

