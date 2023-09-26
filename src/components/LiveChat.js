import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");
    useEffect(() => {
        const i = setInterval(() => {
            //API Pooling
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(20) + "🚀",
                })
            );
        }, 2000);

        return () => clearInterval(i);
    }, []);
    return (
        <>
            <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                {chatMessages.map((c, i) => (
                    <ChatMessage
                        key={i}
                        name={c.name}
                        message={c.message}
                    />
                ))}
            </div>
            <form
                className="w-full border bg-slate-100 border-gray-700 shadow-lg p-1 mx-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(
                        addMessage({
                            name: "Harish Kanuka",
                            message: liveMessage,
                        })
                    );
                    setLiveMessage("");
                }}
                clg>
                <input
                    type="text"
                    className=" w-4/5 border-2 px-2 font-semibold border-black rounded-lg"
                    value={liveMessage}
                    onChange={(e) => {
                        setLiveMessage(e.target.value);
                    }}
                />
                <button className=" text-lg font-medium border border-gray-700 mx-3 px-1 rounded-lg">
                    Send
                </button>
            </form>
        </>
    );
};

export default LiveChat;
