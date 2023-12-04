import { useEffect, useState } from "react";

const Timer = () => {

    const [minuite, setMunite] = useState(0)
    const [hours, setHours] = useState(0)
    const [secound, setSecound] = useState(0)

    const timer = () => {
        const currentDate = new Date();
        let localMunite = 60 - currentDate.getMinutes();
        let localSecound = 60 - currentDate.getSeconds();
        let localHours = 23 - currentDate.getHours();
        console.log(hours);


        setMunite(localMunite)
        setHours(localHours)
        setSecound(localSecound)
    }


    useEffect(() => {
        setInterval(function () { timer() }, 1000);
    }, [])

    return (
        <div className="flex justify-center gap-5 my-10">
            <p className="flex flex-col-reverse justify-center text-center">
                <span>hours</span>
                <span className="bg-red-500 text-white" >{hours < 10 ? `0${hours}` : hours == 24 ? `00` : hours}</span>
            </p>
            <p className="flex flex-col-reverse justify-center text-center">
                <span>minuite</span>
                <span className="bg-red-500 text-white" >{minuite < 10 ? `0${minuite}` : minuite == 60 ? `00` : minuite}</span>
            </p>
            <p className="flex flex-col-reverse justify-center text-center">
                <span>secound</span>
                <span className="bg-red-500 text-white" >{secound < 10 ? `0${secound} ` : secound == 60 ? `00` : secound}</span>
            </p>
        </div>
    );
};

export default Timer;