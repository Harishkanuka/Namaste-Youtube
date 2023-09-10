import React from "react";

const Sidebar = () => {
    return (
        <div className="p-5 shadow-lg w-48">
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <h1 className="font-bold">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    );
};

export default Sidebar;
