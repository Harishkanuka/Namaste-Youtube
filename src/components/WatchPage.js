import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchparams] = useSearchParams();
    console.log(searchparams.get("v"));
    useEffect(() => {
        dispatch(closeMenu());
    });
    return (
        <div className="flex flex-col">
            <div>
                <iframe
                    width="1000"
                    height="500"
                    src={
                        "https://www.youtube.com/embed/" + searchparams.get("v")
                    }
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </div>
            <CommentsContainer />
        </div>
    );
};

export default WatchPage;
