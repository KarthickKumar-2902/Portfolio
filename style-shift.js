/*========================== toggle style switcher============================*/
const styleShiftToggle = document.querySelector(".style-shift-toggler");
styleShiftToggle.addEventListener("click", () => {
    document.querySelector(".style-shift").classList.toggle("open");
})
//hide style - shift on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-shift").classList.toggle("open");
    }
})
/*========================== Theme colors============================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
           style.removeAttribute("disabled"); 
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
/*========================== Theme light and dark============================*/
const dayNight = document.querySelector(".day-night");

    if (dayNight) {
        dayNight.addEventListener("click", () => {
            const icon = dayNight.querySelector("i");
            icon.classList.toggle("fa-sun");
            icon.classList.toggle("fa-moon");
            document.body.classList.toggle("dark");
        });

        // Check for dark mode on load
        if (document.body.classList.contains("dark")) {
            dayNight.querySelector("i").classList.add("fa-sun");
        } else {
            dayNight.querySelector("i").classList.add("fa-moon");
        }
    } else {
        console.error('Element ".day-night" not found');
    }