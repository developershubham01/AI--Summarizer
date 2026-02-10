<h1 align="center"> AI Summarizer Pro</h1>

<p align="center">
  🚀 A modern AI-powered web app that converts long articles and text into short, meaningful summaries in seconds.
</p>

---

<h1 align="center">Hey 👋 What's Up?</h1>

<div align="center">
  <img src="https://skillicons.dev/icons?i=react" height="60" />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=vite" height="60" />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=js" height="60" />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=redux" height="60" />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=css" height="60" />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=vercel" height="60" />
</div>

---

## 🌟 About the Project

**AI Summarizer Pro** is a production-ready AI application that allows users to paste long text or article URLs and instantly get **AI-generated summaries**.

This project focuses on:
- ⚡ Performance
- 🧠 AI integration
- 🧩 Scalable frontend architecture
- 🎯 Clean & responsive UI

---

## ✨ Key Features

✅ AI-generated summaries in real time  
✅ Paste article links or raw text  
✅ Summary history tracking  
✅ Clean & responsive UI  
✅ Fast load time with Vite  
✅ Scalable state management using Redux Toolkit  
✅ Deployed on Vercel  

---

## 🧠 How It Works

1️⃣ User enters article text or URL  
2️⃣ Frontend sends request using **RTK Query**  
3️⃣ **RapidAPI AI service** processes the content  
4️⃣ AI returns summarized text  
5️⃣ Summary is displayed & stored in history  

---

## 🛠 Technologies & Tools Used

| Category | Tech |
|-------|------|
| ⚛ Frontend | React.js |
| ⚡ Build Tool | Vite |
| 🧠 State Management | Redux Toolkit (RTK Query) |
| 🤖 AI API | RapidAPI (Text Summarization) |
| 💻 Language | JavaScript (ES6+) |
| 🎨 Styling | CSS, Responsive Design |
| 🚀 Deployment | Vercel |
| 🔧 Version Control | Git & GitHub |

---

## 🌐 Live Demo

🔗 **Live App:**  
[https://ai-summarizerpro.vercel.app/](https://ai-summarizerpro.vercel.app/)

📂 **GitHub Repository:**  
[https://github.com/developershubham01/AI--Summarizer](https://github.com/developershubham01/AI--Summarizer)

## 📂 Project Folder Structure
```bash

AI--Summarizer/
│
├── public/
│ └── favicon.svg
│
├── src/
│ ├── assets/
│ │ └── icons/
│ │
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Demo.jsx
│ │ ├── SummaryCard.jsx
│ │ └── History.jsx
│ │
│ ├── services/
│ │ └── article.js // RTK Query API logic
│ │
│ ├── store/
│ │ └── store.js // Redux Store
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

### 📥 Clone the Repository

```bash
git clone https://github.com/developershubham01/AI--Summarizer.git
cd AI--Summarizer
```
Install Dependencies

```bash
npm install
```
Run the Project Locally
```bash
npm run dev
```
Open in browser:
👉 http://localhost:5173

build for Production
```bash

npm run build

```

Preview Production Build
```bash

npm run preview
```
Environment Variables
Create a .env file in root:
```bash
VITE_RAPID_API_KEY=your_api_key_here
```
---

### React + Vite Info

This project uses React + Vite for:

⚡ Lightning-fast HMR
📦 Optimized builds
🧩 Minimal configuration

Official plugins used:
```bash
@vitejs/plugin-react (Babel based Fast Refresh)
```

