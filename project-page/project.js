/*
event.clientX - координата X клика относительно окна
event.clientY - координата Y клика
*/
// load all.js
function loadScript(path) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement("script");
        script.src = path;
        script.onload = () => {
            resolve(script);
        }
        script.onerror = () => {
            reject(new Error("The script has failed to load"));
        }
        document.body.append(script);
    });
} 
let promise = loadScript("../all.js");
promise.then(
    script => alert(`${script.src} has been successfully loaded`),
    error => alert(error.message)
);

// display information about a chosen project
let projectTitle = document.querySelector(".project-title");
let aboutProjectSection = document.querySelector(".about-project");
projectTitle.onclick = () => {
    console.log(projectTitle.textContent);
    aboutProjectSection.setAttribute("id", "show");
    document.body.style.overflow = 'hidden';
    // close the about project section when clicking outside the section
    let xStartProject = aboutProjectSection.getBoundingClientRect().x;
    let yStartProject = aboutProjectSection.getBoundingClientRect().y;
    let widthProject = aboutProjectSection.offsetWidth;
    let heightProject = aboutProjectSection.offsetHeight;
    let xEndProject = xStartProject + widthProject;
    let yEndProject = yStartProject + heightProject;
    console.log(xStartProject, xEndProject, widthProject, heightProject, xEndProject, yEndProject);
    window.onclick = (e) => {
        let xclick = e.clientX;
        let yclick = e.clientY;
        console.log(xclick, yclick);
        //check if clicked outside the about project section
        if (yclick < yStartProject || yclick > yEndProject || xclick < xStartProject || xclick > xEndProject) {
            aboutProjectSection.removeAttribute("id");
            document.body.style.overflow = '';
            console.log("click");
        }

    }
}

// close the about project section
let closeButton = document.querySelector(".close-button");
closeButton.onclick = () => {
    aboutProjectSection.removeAttribute("id");
}

// slider logic
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
[prev, next].forEach((element) => {
    element.addEventListener("click", () => {
        let slides = document.querySelector('.slides');
        let activeSlide = document.querySelector('.active');
        switch(element) {
            case prev:
                if (activeSlide.previousElementSibling === null) {
                    slides.lastElementChild.classList.add("active");
                } else { 
                    (activeSlide.previousElementSibling).classList.add("active");
                }
                break;
            case next:
                if (activeSlide.nextElementSibling === null) {
                    slides.firstElementChild.classList.add("active");
                } else {
                    activeSlide.nextElementSibling.classList.add("active");
                }
                break;
        }
        activeSlide.classList.remove("active");
    })
});
