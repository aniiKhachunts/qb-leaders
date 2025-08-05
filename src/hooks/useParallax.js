import { useEffect, useState } from "react";

export default function useParallax(multiplier = 0.2) {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY * multiplier);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [multiplier]);

    return offsetY;
}
