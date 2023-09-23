import React from "react";
import {
    HISTORY_ICON,
    HOME_ICON,
    LIBRARY_ICON,
    LIKED_VIDEOS,
    SHORTS_ICON,
    SUBSCRIPTIONS_ICON,
    YOUR_VIDEOS_ICON,
} from "../utils/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    //Early return
    if (!isMenuOpen) return null;
    return (
        <div className="pl-5 pt-3 shadow-lg w-48  ">
            <ul>
                <li className="px-2  py-2 items-center  hover:bg-gray-300  w-full rounded-lg cursor-pointer">
                    <Link
                        to="/"
                        className="flex">
                        <img
                            className="mx-2"
                            src={HOME_ICON}
                            alt="HomeIcon"
                        />
                        Home
                    </Link>
                </li>
                <li className="px-2 flex py-2 items-center  hover:bg-gray-300  w-full rounded-lg cursor-pointer">
                    <img
                        className="mx-2"
                        src={SHORTS_ICON}
                        alt="ShortsIcon"
                    />
                    Shorts
                </li>
                <li className="px-2 flex py-2 items-center  hover:bg-gray-300  w-full rounded-lg cursor-pointer">
                    <img
                        className="mx-2"
                        src={SUBSCRIPTIONS_ICON}
                        alt="SubIcon"
                    />
                    Subscriptions
                </li>
            </ul>
            <div>
                <ul>
                    <li className="px-2 flex py-2 items-center  hover:bg-gray-300  w-full rounded-lg cursor-pointer">
                        <img
                            className="mx-2"
                            src={LIBRARY_ICON}
                            alt="HomeIcon"
                        />
                        Library
                    </li>
                    <li className="px-2 flex py-2 items-center  hover:bg-gray-300  w-full rounded-lg cursor-pointerflex py-2">
                        <img
                            className="mx-2"
                            src={HISTORY_ICON}
                            alt="ShortsIcon"
                        />
                        History
                    </li>
                    <li className="px-2 flex py-2 items-center  hover:bg-gray-300  w-full rounded-lg cursor-pointer">
                        <img
                            className="mx-2"
                            src={YOUR_VIDEOS_ICON}
                            alt="SubIcon"
                        />
                        Your Videos
                    </li>
                    <li className="px-2 flex py-2 items-center  hover:bg-gray-300  w-full rounded-lg cursor-pointer">
                        <img
                            className="mx-2"
                            src={LIKED_VIDEOS}
                            alt="SubIcon"
                        />
                        Liked Videos
                    </li>
                </ul>
            </div>
            <h1 className="font-bold pt-3">Subscriptions</h1>
            <ul>
                <li className="px-2 flex py-2 items-center  hover:bg-gray-300  w-full rounded-lg cursor-pointer">
                    Music
                </li>
                <li className="px-2 flex py-2 items-center  hover:bg-gray-300  w-full rounded-lg cursor-pointer">
                    Sports
                </li>
                <li className="px-2 flex py-2 items-center  hover:bg-gray-300  w-full rounded-lg cursor-pointer">
                    Gaming
                </li>
                <li className="px-2 flex py-2 items-center  hover:bg-gray-300  w-full rounded-lg cursor-pointer">
                    Movies
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
