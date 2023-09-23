import React from "react";

const VideoCard = ({ info }) => {
    // console.log(info);
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
                    <li className="font-bold text-gray text-ellipsis overflow-hidden">
                        {channelTitle}
                    </li>
                    <li className="font-bold  text-gray text-ellipsis overflow-hidden">
                        {statistics?.viewCount}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default VideoCard;
