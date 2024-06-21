const blogForm = document.getElementById('blog-form');
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

const formSubmit = function(event) {
    event.preventDefault();

    const formUsername = usernameInput.value.trim();
    const formTitle = titleInput.value.trim();
    const formContent = contentInput.value.trim();

    if (!formUsername || !formTitle || !formContent) {
        displayErrorMessage('Please complete the form.');
        return;
    }

    const formData = {
        username: formUsername,
        title: formTitle,
        content: formContent
    };

    saveToLocalStorage(formData);

    window.location.href = 'posts.html';
};

blogForm.addEventListener('submit', formSubmit);

function displayErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.textContent = message;
    errorDiv.classList.add('error-message');
    blogForm.appendChild(errorDiv);

    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

function saveToLocalStorage(formData) {
    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.push(formData);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
}

const darkModeToggle = document.getElementById('dark-mode-toggle');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', 'disabled');
};

const currentTheme = localStorage.getItem('darkMode');
if (currentTheme === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});


