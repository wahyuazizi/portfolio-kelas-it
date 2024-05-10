
document.addEventListener("DOMContentLoaded", () =>{
    const toggleThemeButton = document.getElementById("toggleTheme");
    // const themeIcon = document.querySelector()

    function setTheme(isDark) {
        console.log(`${isDark} tes`);
    }

    toggleThemeButton.addEventListener("click", ()=>{
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("isDark", isDark);

        setTheme(isDark);
    })
    
    const loadTheme = ()=>{
        const isDark = localStorage.getItem("isDark") ==="true";
        document.body.classList.toggle("dark-theme", isDark);
    
        setTheme(isDark);
    }
    
    loadTheme();

})

