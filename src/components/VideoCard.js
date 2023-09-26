import React from "react";
import { USER_AVATAR } from "../utils/constants";

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div>
            <div className="p-2 m-2 w-72 transition-transform transform hover:scale-110  hover:shadow-lg ">
                <img
                    className="  cursor-pointer w-full  object-cover rounded-lg"
                    src={thumbnails?.medium?.url}
                    alt="thumbnails"
                />
                <ul>
                    <li className="font-bold py-2 text-gray text-ellipsis overflow-hidden">
                        {title}
                    </li>
                    <li className="text-slate-800 flex items-center">
                        <img
                            className="h-8 w-5 mx-1"
                            src={USER_AVATAR}
                            alt="User Avatar"
                        />
                        {channelTitle}
                    </li>
                    <li className="text-gray-600 ">
                        {statistics?.viewCount} Views
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default VideoCard;
