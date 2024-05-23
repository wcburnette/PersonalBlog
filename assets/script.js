const blogForm = document.getElementById('blog-form');
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const button = document.querySelector('.button');

const formSubmit = function(event) {
    event.preventDefault();

    const formUsername = usernameInput.value.trim();
    const formTitle = titleInput.value.trim();
    const formContent = contentInput.value.trim();

    const formData = {
        username: formUsername,
        title: formTitle,
        content: formContent
    };

    saveToLocalStorage(formData);
    document.location.href='blog.html'
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