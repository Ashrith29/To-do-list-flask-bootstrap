# To-Do List Web App (Flask + Bootstrap)

A simple To-Do List web application built with Python Flask backend and vanilla JavaScript frontend styled with Bootstrap 5.  
Users can add tasks (with optional due dates), mark them complete, delete tasks, and view all tasks.

---

## Features

- Add new tasks with title and optional due date
- Mark tasks as complete/uncomplete
- Delete tasks
- Responsive UI using Bootstrap 5
- Backend REST API with Flask
- Tasks stored in a JSON file (no database)

### 📸 Screenshot
![image](https://github.com/user-attachments/assets/9ffd50a8-27c3-4bd3-836c-8e55213fe8d3)



---
## ⚙️ Setup Instructions

1. Clone the Repository
2. Create and Activate a Virtual Environment
3. Install Flask
4. Create an Empty JSON File
5. Open local host link in Browser

---
## 1. commits:

commit 1: Initial commit — Flask API and project scaffolding
commit 2: Added front-end HTML with Bootstrap layout
commit 3: Implemented task add, delete, and toggle complete with vanilla JS
commit 4: Fixed UI bugs, improved responsiveness
commit 5: Documentation and setup instructions added



### 2. AI Tool Usage

I used **ChatGPT** throughout the project primarily for:

- Generating initial API and front-end code snippets.
- Fixing issues such as CORS errors when making API calls.
- AI helped refactor CSS to Bootstrap classes for a cleaner UI and responsiveness.
- Suggesting best practices for REST API design.


### 3. Challenges and Solutions

- Challenge: Managing task state without a database.
Solution: Used a JSON file to persist data on the server.

- Challenge: Handling async updates and UI refresh smoothly.
Solution: Used fetch API with promises and clean DOM updates on each action.

- Challenge: Ensuring responsive design without complex CSS.
Solution: Adopted Bootstrap 5, reducing custom CSS and improving cross-device compatibility.


### 4. Time Log

| Activity               | Time Spent (hours) |
|------------------------|--------------------|
| Backend API development | 2 |
| Front-end UI with Bootstrap and JS | 2 |
| AI assistance (ChatGPT prompts, fixes) | 1 |
| Testing and debugging   | 1 |
| Documentation and repo setup | 1 |
| **Total**              | **7**|

---

If you want, I can help you generate a PDF from this documentation or package the repo for GitHub with commit messages you can simulate. Would you like that?
