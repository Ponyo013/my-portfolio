import { useState, useEffect } from "react";

function Navbar() {
    const [selected, setSelected] = useState("Home");

    const handleScroll = () => {
        const sections = ["home", "about", "projects"];
        const scrollPos = window.scrollY + window.innerHeight / 2;

        for (let sec of sections) {
            const element = document.getElementById(sec);
            if (element) {
                const top = element.offsetTop;
                const bottom = top + element.offsetHeight;
                if (scrollPos >= top && scrollPos < bottom) {
                    setSelected(sec.charAt(0).toUpperCase() + sec.slice(1));
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (item: string) => {
        const offset = 80;
        if (item === "Home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const id = item.toLowerCase();
            const element = document.getElementById(id);
            if (element) {
                const elementPos = element.offsetTop;
                window.scrollTo({ top: elementPos - offset, behavior: "smooth" });
            }
        }
    };


    return (
        <div className="sticky top-0 z-50 bg-white flex w-full justify-center space-x-12 text-xl font-primary font-bold py-4">
            {["Home", "About", "Projects"].map((item) => (
                <p
                    key={item}
                    onClick={() => handleClick(item)}
                    className={`
            ${item === selected ? "opacity-100" : "opacity-50"}
            cursor-pointer
            transition-opacity duration-200
          `}
                >
                    {item}
                </p>
            ))}
        </div>
    );
}

export default Navbar;
