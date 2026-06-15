# Coding Challenge Tracker

A dynamic and interactive Coding Challenge Tracker built using HTML, CSS, and JavaScript. This application helps users organize and monitor their coding progress by tracking LeetCode and HackerRank problems with full CRUD functionality and local data persistence.

---

## Features

### Create Challenges
- Add new coding challenges
- Specify:
  - Problem Name
  - Platform (LeetCode or HackerRank)
  - Difficulty (Easy, Medium, Hard)

### Read Challenges
- Display all saved challenges dynamically

### Update Challenges
- Edit existing challenge names

### Delete Challenges
- Remove challenges permanently

### Mark Solved / Unsolved
- Toggle challenge status
- Solved challenges are visually distinguished

### Filter Challenges
- View All Challenges
- View Solved Challenges
- View Unsolved Challenges

### Data Persistence
- Uses `window.localStorage`
- Tasks remain available after refreshing or reopening the browser

### Responsive Design
- Optimized for:
  - Mobile devices
  - Tablets
  - Desktop screens

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- DOM Manipulation
- Event Handling
- Local Storage API

---

## Project Structure

```text
coding-challenge-tracker/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── home-page.png
    ├── add-challenge.png
    ├── solved-challenge.png
    ├── unsolved-challenge.png
    └── filter-options.png
```

---

## Functionalities Implemented

- Full CRUD Operations
- Dynamic DOM Element Creation
- Event Listeners
- State Management
- Local Storage Persistence
- Challenge Status Tracking
- Filtering System
- Responsive Layout

---

## Sample Challenge

| Problem Name | Platform | Difficulty | Status |
|---------------|----------|------------|---------|
| Two Sum | LeetCode | Easy | Unsolved |
| Binary Search | LeetCode | Medium | Solved |
| Valid Parentheses | LeetCode | Easy | Solved |
| Climbing Stairs | LeetCode | Medium | Unsolved |

---

## Screenshots

### Home Page
![Home Page](assets/home-page.png)

### Add Challenge
![Add Challenge](assets/add-challenge.png)

### Solved Challenge
![Solved Challenge](assets/solved-challenge.png)

### Unsolved Challenge
![Unsolved Challenge](assets/unsolved-challenge.png)

### Filter Options
![Filter Options](assets/filter-options.png)

---

## Expected Outcome

A fully functional, state-driven Coding Challenge Tracker that demonstrates:

- DOM Manipulation
- Event Handling
- State Management
- Dynamic Element Creation
- CRUD Operations
- Local Storage Persistence

---

## Author

### Challa Pradeep

Aspiring Web Developer

---

## License

This project is developed for educational and internship purposes.
