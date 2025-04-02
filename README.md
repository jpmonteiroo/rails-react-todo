# 🚀 Rails + React Todo App

## 📌 About
This project is a **full-stack Todo application** built using **Ruby on Rails** for the backend and **React.js** for the frontend. It allows users to create, manage, and delete their tasks efficiently, implementing pagination and RESTful APIs.

## 🛠 Tech Stack
- **Frontend:** React.js, Axios, CSS
- **Backend:** Ruby on Rails, Kaminari (pagination)
- **Database:** PostgreSQL
- **API Communication:** RESTful architecture

## 📂 Project Structure
```
rails-react-todo/
│── backend/   # Ruby on Rails API
│── frontend/  # React.js Frontend
```

## 🔧 Installation & Setup
### Clone the repository
```sh
git clone https://github.com/jpmonteiroo/rails-react-todo.git
cd rails-react-todo
```

### Backend Setup
```sh
cd backend
bundle install
rails db:create db:migrate db:seed
rails server
```

### Frontend Setup
```sh
cd frontend
npm install
npm start
```

## 🚀 Features
- Create, edit, and delete todos
- Mark todos as completed
- Pagination for task management
- API integration between frontend and backend
