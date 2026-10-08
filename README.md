# Todo App

A simple todo list built with plain HTML, CSS and JavaScript. No frameworks or build tools are needed.

## Features

- **Add tasks:** type a task and click **Add**. Empty input is ignored.
- **Complete tasks:** click **Completed** to put a `*` in front of the task and cross it out. The button is then disabled.
- **Delete tasks:** click **Delete** to remove a task from the list.

Tasks are not saved, so the list is cleared when you refresh the page.

## Getting started

1. Clone or download this repository.
2. Open `index.html` in any web browser.

## Project structure

```text
todo/
├── index.html   # Page layout: input, Add button and task list
├── style.css    # Styling
├── script.js    # Add, complete and delete logic
└── .gitignore   # Keeps .env files out of git
```

## Environment variables

`.env` files are listed in `.gitignore` so secrets are never committed. Code running in the browser cannot read `.env`, and anything placed in `script.js` is visible to every visitor, so never put secrets in front-end code.
