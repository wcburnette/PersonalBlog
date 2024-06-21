Personal Blog Application
This is a simple personal blog application where users can create and view blog posts. The application utilizes localStorage for storing blog post data and provides a light mode/dark mode toggle for visual customization.

Features
Landing Page
Presents a form with inputs for username, blog title, and blog content.
Validates form submission; prompts user to complete all fields if any are missing.
Posts Page
Displays a list of blog posts retrieved from localStorage.
Includes a header with light mode/dark mode toggle and a "Back" button for navigation.
Blog Post Details
Allows users to view individual blog post details including title, content, and author.
Footer
Provides a link to the developer's portfolio for additional information.
Functionality
Landing Page
Upon loading the application:

Users are presented with a form to input their blog post details: username, blog title, and content.
Upon form submission, the data is stored in localStorage.
Users are redirected to the Posts Page after successful submission.
Posts Page
Displays a header with options:
Light mode/dark mode toggle to adjust the page's visual theme.
"Back" button to navigate back to the Landing Page for creating new posts.
Lists all stored blog posts, each showing title, content, and author.
Blog posts are pulled from localStorage, ensuring persistence across sessions.
Dark Mode Toggle
Clicking the light mode/dark mode toggle updates the page's theme accordingly.
Provides visual customization for user preference.
Navigation
The "Back" button redirects users back to the Landing Page where they can add new blog entries.
Ensures smooth navigation between creating new posts and viewing existing ones.
Validation
Form validation ensures all required fields (username, title, content) are filled before submission.
Provides feedback to the user if any fields are missing, prompting them to complete the form.
Developer Portfolio
Includes a footer link directing users to the developer's portfolio for more information about the application and its creator.

Screen Record

Deployed Site
https://wcburnette.github.io/PersonalBlog/