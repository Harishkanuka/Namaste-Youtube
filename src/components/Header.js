import React, { useEffect, useState } from "react";
import {
    CREATE_VIDEO_ICON,
    HAMBURGER_MENU,
    NOTIFICATION_ICON,
    SEARCH_ICON,
    SEARCH_MIC,
    USER_AVATAR,
    YOUTUBE_LOGO,
    YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            // Make an API Call After Every Key Press
            // But If the difference between two API calls is < 200ms then Decline API Call
            getSearchSuggestions();
        }, 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);
    // Make an API Call
    const getSearchSuggestions = async () => {
        console.log(searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col p-2 shadow-lg items-center">
            <div className="flex col-span-1 items-center">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="w-11 h-20 cursor-pointer"
                    src={HAMBURGER_MENU}
                    alt="Menu Icon"
                />
                <a href="/">
                    <img
                        className=" h-16 -z-10 "
                        src={YOUTUBE_LOGO}
                        alt="Youtube Logo"
                    />
                </a>
            </div>
            <div>
                <div className="col-span-10 items-center flex ">
                    <input
                        type="text"
                        className="w-[36rem] border-2 border-black text-black p-2 rounded-full font-semibold "
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />

                    <div className="flex items-center mx-2">
                        <button className="rounded-r-full ">
                            <img
                                className="h-8"
                                src={SEARCH_ICON}
                                alt="SearchIcon"
                            />
                        </button>

                        <img
                            className="h-8 cursor-pointer"
                            src={SEARCH_MIC}
                            alt="SearchMic"
                        />
                    </div>
                </div>
                {showSuggestions && (
                    <div className="absolute z-10 bg-white py-2 px-2 w-[36rem] shadow-lg rounded-lg border border-gray-200">
                        <ul>
                            {suggestions.map((s) => (
                                <li
                                    key={s}
                                    className=" flex py-2 px-3 shadow-sm hover:bg-gray-100">
                                    <img
                                        className="pr-2"
                                        src={SEARCH_ICON}
                                        alt=""
                                    />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="col-span-1 flex justify-evenly cursor-pointer">
                <img
                    className="h-8 "
                    src={CREATE_VIDEO_ICON}
                    alt="VideoIcon"
                />
                <img
                    className="h-8 "
                    src={NOTIFICATION_ICON}
                    alt="Notification Icon"
                />
                <img
                    className="h-8 "
                    src={USER_AVATAR}
                    alt="USER Avatar"
                />
            </div>
        </div>
    );
};

export default Header;
