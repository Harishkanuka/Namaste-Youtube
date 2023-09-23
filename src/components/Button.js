import React from "react";

const Button = ({ name }) => {
    return (
        <div>
            <button className="px-4 py-2 m-3 rounded-lg bg-gray-300 hover:bg-gray-200">
                {name}
            </button>
        </div>
    );
};

export default Button;
