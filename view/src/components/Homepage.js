import React from "react";
import { Link } from "react-router-dom";

export function Homepage() {
    return(
        <div className="homepage-background">
            <div className="homepage-join-container">
                <h2>Start shopping today</h2>
                <button><Link to='#'>Sign Up</Link></button>
                <p>Already have an account? <Link to='#'>Login</Link></p>
            </div>
        </div>
    )
}