
document.addEventListener("DOMContentLoaded", () =>{
    const toggleThemeButton = document.getElementById("toggleTheme");
    const themeIcon = document.querySelector(".fa-sun");

    function setTheme(isDark) {
        if (isDark) {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        } else {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }
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

