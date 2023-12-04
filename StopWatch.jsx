import { useEffect, useState } from "react";

const StopWatch = () => {

    const [minuite, setMunite] = useState(0)
    const [hour, setHours] = useState(0)
    const [secound, setSecound] = useState(0)
    const [Day, setDay] = useState(0)


    // Set your target date and time
    const endingTime = new Date("December 04, 2023 19:15:00").getTime();

    const startingTime = new Date("December 03, 2023 19:14:00").getTime();

    // Update the stopwatch every 1000 milliseconds (1 second)

    function updateStopwatch() {
        // Get the current date and time
        const currentDate = new Date().getTime();

        const isStartingTime = startingTime - currentDate

        // Calculate the difference between the target date and time and the current date and time
        const timeDifference = endingTime - currentDate;
        // console.log(timeDifference)

        if (isStartingTime<=0) {

            if (timeDifference >= 0) {
                // Calculate hours, minutes, and seconds
                const day = Math.floor(timeDifference / (1000*60*60*24))
                setDay(day)
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                setHours(hours)
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                setMunite(minutes)
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                setSecound(seconds)
            }
            else {
                console.log('timeout');
            }
        }
        
       

    }

    useEffect(() => {
        setInterval(() => {
            updateStopwatch()
        }, 1000)
    }, [])

    return (
        <div className="flex justify-center gap-5 my-10">
            <p className="flex flex-col-reverse justify-center text-center">
                <span>Day</span>
                <span className="bg-red-500 text-white" >{Day < 10 ? `0${Day} ` : Day}</span>
            </p>
            <p className="flex flex-col-reverse justify-center text-center">
                <span>hours</span>
                <span className="bg-red-500 text-white" >{hour < 10 ? `0${hour}` : hour == 24 ? `00` : hour}</span>
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

export default StopWatch;