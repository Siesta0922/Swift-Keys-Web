document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.getElementById("nav-links");
    const exit = document.getElementById("close");
    const bar = document.getElementById("bar");

    bar.addEventListener("click", function () {
        navLinks.classList.add("active");
        navLinks.classList.remove("close");
    });

    exit.addEventListener("click", function () {
        navLinks.classList.add("close");
        navLinks.classList.remove("active");
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else{
                entry.target.classList.remove('show')
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el));
    
});

function press(){
    window.location.href = "shop.html";
}