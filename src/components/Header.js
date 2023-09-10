import React from "react";
import {
    CREATE_VIDEO_ICON,
    HAMBURGER_MENU,
    NOTIFICATION_ICON,
    SEARCH_ICON,
    SEARCH_MIC,
    USER_AVATAR,
    YOUTUBE_LOGO,
} from "../utils/constants";

const Header = () => {
    return (
        <div className="grid grid-flow-col p-2 shadow-lg items-center">
            <div className="flex col-span-1 items-center">
                <img
                    className="w-11 h-20"
                    src={HAMBURGER_MENU}
                    alt="Menu Icon"
                />
                <img
                    className=" h-16 -z-10 "
                    src={YOUTUBE_LOGO}
                    alt="Youtube Logo"
                />
            </div>
            <div className="col-span-10 items-center flex ">
                <input
                    type="text"
                    className="w-1/2 border-2 border-black text-black p-2 rounded-full hover:bg-none bg-gradient-to-r from-zinc-500 font-semibold "
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
            <div className="col-span-1 flex justify-around cursor-pointer">
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
