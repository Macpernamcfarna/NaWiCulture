# NaWeCulture 🌍

A cultural website that explores the languages, traditions, food, and stories of Sierra Leone.

## 📌 About The Project

**NaWeCulture** is a web project created to celebrate cultural diversity and help people discover the beauty of Sierra Leonean culture. The website provides information about languages, traditional foods, customs, and cultural practices — from the languages spoken across the nation (Krio, Mende, Temne, Limba, and more) to the classic dishes that define its cuisine.

The goal is to create a platform where users can learn, appreciate, and connect with Sierra Leonean culture from anywhere in the world.

## ✨ Features

- 🌎 Explore Sierra Leonean culture and heritage
- 🗣️ Discover the languages of Sierra Leone (Krio, Mende, Temne, Limba, Kono, and more)
- 🍲 Learn about traditional foods and cuisine (Jollof rice, cassava leaf stew, groundnut stew, and more)
- 🎭 Read about cultural traditions, tribes, and practices
- 📩 Contact form for user messages
- 📬 Newsletter subscription system
- 💾 Store contact messages using MongoDB + Mongoose
- 📱 Responsive layout for different devices

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB (contact messages, via Mongoose)
- NeDB / `@seald-io/nedb` (newsletter subscribers)

### Other Tools
- Git & GitHub
- VS Code
- Nodemon (development)

## 📂 Project Structure

```
NaWeCulture/
│
├── public/
│   ├── home.html
│   ├── languages.html
│   ├── languages.css
│   ├── food-culture.html
│   ├── food-culture.css
│   ├── heritage.html
│   ├── heritage.css
│   ├── about.html
│   ├── about.css
│   ├── contact.html
│   ├── contact.css
│   ├── contact.js
│   ├── style.css
│   ├── script.js
│   └── img/
│
├── routes/
│   └── contact.js
│
├── subscribers.db
├── server.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/macpernamcfarna/NaWeCulture.git
```

### 2. Navigate into the project folder

```bash
cd NaWeCulture
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is installed and running on your machine.

The application connects using:

```
mongodb://localhost:27017/naWeCulture
```

### 5. Run the server

```bash
npm run dev
```

or:

```bash
node server.js
```

### 6. Open the website

Visit:

```
http://localhost:3000
```

## 🧭 Routes

| Route         | Description                              |
| ------------- | ---------------------------------------- |
| `/`           | Home page                                |
| `/languages`  | Languages of Sierra Leone page           |
| `/food-culture` | Traditional Sierra Leonean cuisine page |
| `/heritage`   | Heritage and culture page                |
| `/about`      | About the project                        |
| `/contact`    | Contact page                             |
| `POST /post`      | Submits a contact message (MongoDB)  |
| `POST /subscribe` | Subscribes to the newsletter (NeDB)  |

## 🎯 Purpose

This project aims to:

- Preserve cultural knowledge
- Encourage cultural awareness
- Help people learn about communities
- Promote appreciation for diversity
- Provide a platform for cultural storytelling

## 🔮 Future Improvements

- Add more cultural articles
- Add image galleries
- Add a search feature
- Add user accounts and authentication
- Improve content management system
- Move newsletter storage from NeDB to MongoDB
- Add an admin dashboard for managing cultural content

## 👨‍💻 Author

Created by MACPERNA MCFARNA

## 📄 License

This project is for educational and cultural learning purposes.
