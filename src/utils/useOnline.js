import { useEffect, useState } from "react";

const useOnline = () => {
    const [isonline, setIsOnline] = useState("");

    const handleonline = () => { setIsOnline(true) };
    const handleoffline = () => { setIsOnline(false) };

    useEffect(() => {
        window.addEventListener("online", handleonline);
        window.addEventListener("offline", handleoffline);

        return(()=>{
            window.removeEventListener("online", handleonline);
            window.removeEventListener("offline", handleoffline)
        })
    }, [])

    return isonline;
}

export default useOnline;