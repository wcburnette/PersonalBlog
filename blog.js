const blogForm = document.getElementById('blog-form');
const blogTitleInput = document.getElementById('blogTitle');
const title2Input = document.getElementById('title2');
const title3Input = document.getElementById('title3');
const hereIsTheTitleInput = document.getElementById('hereIsTheTitle');
const hereIsTheTitle2Input = document.getElementById('hereIsTheTitle2');
const button = document.querySelector('.button');

const formSubmit = function(event) {
    event.preventDefault();

    const formBlogTitle = blogTitleInput.value.trim();
    const formTitle2 = title2Input.value.trim();
    const formTitle3 = title3Input.value.trim();
    const formHereIsTheTitle = hereIsTheTitle.value.trim();
    const formHereIsTheTitle2 = hereIsTheTitle2.value.trim();

    const formData = {
        BlogTitle : formBlogTitle,
        title2: formTitle2,
        title3: formTitle3,
        hereIsTheTitle: formHereIsTheTitle,
        hereIsTheTitle2: formHereIsTheTitle2,
    };

    saveToLocalStorage(formData);
};

const saveToLocalStorage = function(data) {
    let blogs = readLocalStorage();
    blogs.push(data);
    localStorage.setItem('blogs', JSON.stringify(blogs));
};

const readLocalStorage = function() {
    return JSON.parse(localStorage.getItem('blogs')) || [];
};

blogForm.addEventListener('submit', formSubmit);


let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('dark-mode-toggle');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
};


const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', 'disabled');
};


if (darkMode === 'enabled') {
    enableDarkMode();
};

if (darkModeToggle) {
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
});
};