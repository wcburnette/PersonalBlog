function saveBlogPost(event) {
    event.preventDefault();

    const title = document.getElementById('blogTitle').value;
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;

    const newPost = {
        username: author,
        title: title,
        content: content
    };

    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    posts.push(newPost);

    localStorage.setItem('blogPosts', JSON.stringify(posts));

    document.getElementById('blogForm').reset();

    displayBlogPosts();
}

function getBlogPosts() {
    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    return posts;
}

function displayBlogPosts() {
    const posts = getBlogPosts();
    const blogList = document.getElementById('blog-list');

    blogList.innerHTML = '';

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('card');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${post.username}`;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        postCard.appendChild(titleElement);
        postCard.appendChild(authorElement);
        postCard.appendChild(contentElement);

        blogList.appendChild(postCard);
    });
}

function goBack() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    displayBlogPosts();
});

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