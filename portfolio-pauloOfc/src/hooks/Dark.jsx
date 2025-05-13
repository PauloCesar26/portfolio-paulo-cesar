import { MoonStar, Sun } from "lucide-react"
import { useEffect, useState } from "react"

function Dark() {
    const [isDark, setIsDark ] = useState(() => {
        return localStorage.getItem("dark") === "1";
    });

    useEffect(() => {
        const dark = localStorage.getItem("dark");

        if(dark){
            document.body.classList.add("dark");
        }
        else{
            document.body.classList.remove("dark");
        }
    }, [isDark]);

    const darkToggle = () => {
        setIsDark((prev) => { 
            const newTheme = !prev;
            if(newTheme){
                localStorage.setItem("dark", "1"); // Salva no localStorage
            } 
            else{
                localStorage.removeItem("dark"); // Remove do localStorage
            }
            return newTheme;
        });
    };

    //function para pegar o valor anterior, se for falso(modo claro) vai passar para true(modo escuro), 
    //tudo isso quando clicar no botão para mudar o estado
    // const darkToggle = () => {
    //     setIsDark((prev) => !prev);
    // }

  return (
    <button onClick={darkToggle} className="transition duration-700 ease-in-out cursor-pointer">
        {/* Ícone que muda de acordo com o estado do tema */}
        {isDark ? <Sun className="icon-sidebar text-white" /> : <MoonStar className="icon-sidebar text-black" />}
    </button>
  )
}

export default Dark