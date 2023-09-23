import React from "react";
import Button from "./Button";

const ButtonList = () => {
    return (
        <div className="flex">
            <Button name="All" />
            <Button name="Music" />
            <Button name="Cricket" />
            <Button name="News" />
            <Button name="Live" />
            <Button name="Gaming" />
            <Button name="Soccor" />
            <Button name="Cooking" />
            <Button name="Data Strctures" />
            <Button name="React" />
            <Button name="Java Script" />
        </div>
    );
};

export default ButtonList;
