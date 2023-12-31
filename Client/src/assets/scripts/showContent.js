// eslint-disable-next-line @typescript-eslint/no-unused-vars
function showContent(sectionId) {
    const sections = document.querySelectorAll("#home, #about, #contact"); // Corrected selector
    sections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";

    const navItems = document.querySelectorAll(".nav");
    navItems.forEach(item => {
        item.classList.remove("active");
    });

   
    document.querySelector(`.nav[data-section="${sectionId}"]`).classList.add("active");

}
