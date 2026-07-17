# NaWeCulture 🌍

A cultural website that explores languages, traditions, food, and stories from different communities around the world.

## 📌 About The Project

**NaWeCulture** is a web project created to celebrate cultural diversity and help people discover the beauty of different cultures in Sierra Leone. The website provides information about languages, traditional foods, customs, and cultural practices.

The goal is to create a platform where users can learn, appreciate, and connect with cultures from around the world.

## ✨ Features

* 🌎 Explore different cultures in Sierra Leone
* 🗣️ Learn about languages and communication
* 🍲 Discover traditional foods
* 🎭 Read about cultural traditions and practices
* 📩 Contact form for user messages
* 📬 Newsletter subscription system
* 💾 Store contact messages using MongoDB
* 📱 Responsive layout for different devices

## 🛠️ Technologies Used

### Frontend
* HTML5
* CSS3
* JavaScript

### Backend
* Node.js
* Express.js

### Database
* MongoDB
* Mongoose

### Other Tools
* Git & GitHub
* VS Code
* NeDB (for newsletter subscription storage)

## 📂 Project Structure


NaWeCulture/
│
├── public/
│ ├── home.html
│ ├── about.html
│ ├── heritage.html
│ ├── contact.html
│ ├── style.css
│ ├── contact.css
│ └── script.js
│
├── routes/
│ └── subscribe.js
│
├── models/
│ └── Contact.js
│
├── subscribers.db
├── server.js
├── package.json
└── README.md


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/macpernamcfarna/NaWeCulture.git
2. Navigate into the project folder
cd NaWeCulture
3. Install dependencies
npm install
4. Start MongoDB

Make sure MongoDB is installed and running on your machine.

The application connects using:

mongodb://localhost:27017/naWeCulture
5. Run the server
npm run dev

or:

node server.js
6. Open the website

Visit:

http://localhost:3000
🎯 Purpose

This project aims to:

Preserve cultural knowledge
Encourage cultural awareness
Help people learn about communities
Promote appreciation for diversity
Provide a platform for cultural storytelling
🔮 Future Improvements
Add more cultural articles
Add image galleries
Add a search feature
Add user accounts and authentication
Improve content management system
Move newsletter storage from NeDB to MongoDB
Add an admin dashboard for managing cultural content
👨‍💻 Author

Created by MACPERNA MCFARNA

📄 License

This project is for educational and cultural learning purposes.
