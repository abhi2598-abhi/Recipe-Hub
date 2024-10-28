import React from "react";
import { Link } from "react-router-dom";

import Card from "../shared/components/UiElements/Card";

import './AdminPage.css'

const AdminPage = () => {
    return <div>
        <div className="admin-page">
        <h1>Admin Rights</h1>
        <Link to="/admin/postedrecipes" className="link">
        <Card className="card__content">
            <h1>Posted Recipes</h1>
        </Card>
        </Link>
        <Link to="/admin/addrecipes" className="link">
        <Card className="card__content">
            <h1>Add New Recipe</h1>
        </Card>
        </Link>
    </div>
    </div>
}

export default AdminPage;

