import React from "react";
import { Link } from "react-router-dom";

export function StartPage() {
    return(
        <div className="startpage-background">
            <div className="startpage-join-container">
                <h2>Start shopping today</h2>
                <button><Link to='/register'>Sign Up</Link></button>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    )
}