import { ESingleContentType } from "./type";
import { Iconfy } from "../Iconfy";
import { useRef, useState, useEffect } from "react";

const Background = ({ ...props }) => {
    const [isPlaying, setIsPlaying] = useState(props.isVideoPlaying);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // Cập nhật trạng thái phát khi props thay đổi
    useEffect(() => {
        if (videoRef.current) {
            props.isVideoPlaying ? videoRef.current.play() : videoRef.current.pause();
            setIsPlaying(props.isVideoPlaying);
        }
    }, [props.isVideoPlaying]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <div className="relative">
            {props.type === ESingleContentType.video ? (
                <div>
                    <video
                        ref={videoRef}
                        src={props.imageUrl}
                        className="rounded-[12px] h-[452px]"
                        onClick={togglePlay}
                    />
                    {!isPlaying && (
                        <div className="absolute top-[150px] left-[300px] cursor-pointer" onClick={togglePlay}>
                            <div className="w-[120px] h-[120px] rounded-full bg-white bg-opacity-75 flex justify-center items-center">
                                <Iconfy
                                    icon="gravity-ui:play-fill"
                                    className="text-[#ff0000] size-[48px]"
                                />
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <img
                    src={props.imageUrl}
                    alt={props.title}
                    className="rounded-[12px] object-cover w-[360px] h-[452px]"
                />
            )}
        </div>
    );
};

export default Background;
