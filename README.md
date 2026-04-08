# 📡 News Aggregator

A modern news web app built with **React**, **Vite**, **Tailwind CSS**, and **Vercel Serverless Functions** to fetch real-time news from **NewsAPI**. 

It delivers real-time headlines with a sleek UI, secure backend proxy, and optimized performance.

## 👉 Live Demo: https://news-aggregator-pi-pearl.vercel.app/

## 🚀 Features:
- Search for news with debounce 🚀
- Category filters (General, Tech, Sports, etc.)
- Client-side caching (localStorage)
- Serverless backend proxy to securely fetch news
- Light & Dark theme toggle 🌙☀️
- Add / Remove bookmarks ❤️
- Responsive UI with modern design
- Deployed via Vercel

## 📸 Screenshots

<img width="3036" height="5602" alt="newshomedark" src="https://github.com/user-attachments/assets/4b69b168-c202-4860-abcf-c89d7ec87205" />
<img width="3036" height="3340" alt="newssearch" src="https://github.com/user-attachments/assets/3d235dbe-c567-4bc1-8d32-909adfa5f0ff" />
<img width="3036" height="2248" alt="newsbookmark" src="https://github.com/user-attachments/assets/cd2f9a06-7306-4e84-a6d1-de26b2e572cc" />

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| React | UI Library |
| Vite | Development & Build Tool |
| Tailwind CSS | Utility-First Styling |
| Axios | HTTP Requests |
| Lucide Icons | SVG Icons |
| Vercel | Deployment & Serverless Functions |

## 📁 Project Structure

```pgsql
| News-Aggregator │ 
├── api / 
└── news.js # Serverless proxy │ 
├── src /
├── components /
│   ├── BookmarkButton.jsx
│   ├── CategoryFilter.jsx
│   ├── Error.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── NewsCard.jsx
│   └── SearchBar.jsx 
├── App.jsx │
├── index.css │
├── main.jsx │  
├── .env.example 
├── .gitignore 
└── package.json
```

## 📌 Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/mohdkamran-khan/News-Aggregator.git
cd News-Aggregator
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Add API Key
Create a .env file in the project root with:

```bash
NEWS_API_KEY=YOUR_NEWSAPI_KEY
```

### 4️⃣ Run Locally

```bash
npm run dev
```

## 🔐 Serverless Proxy (Vercel Functions)

To avoid exposing your NewsAPI key in the frontend, a serverless function is used.

The proxy file is located at:

```bash
/api/news.js
```

## 📦 Deployment

This project is deployed on Vercel.

Steps to deploy:

- Push the repo to GitHub

- Go to https://vercel.com
 and import your project

- Add environment variable:

```bash
NEWS_API_KEY=yourNewsAPIkey
```

- Deploy

## 🔎 Usage

- Search news using the top search bar

- Select a category (All, Business, Tech, etc.)

- Click the Bookmark button on a news card to save it

- View bookmarks by clicking the bookmark icon in the navbar

- Toggle light/dark theme

## 🎨 UI & Design

The app features:

- Glassmorphism UI on search / filters

- Modern responsive category chips

- Smooth hover & transition effects

- Clean and readable card layout

## 🛡 Security

- API keys are stored only on the serverless backend

- No sensitive keys stored in frontend

- .env files are ignored via .gitignore

## ⚡ Performance Optimizations

- LocalStorage caching
- Debounced search
- Lightweight components
- Fast Vite builds
- Serverless architecture

Result → blazing fast UX.

## 🧠 Notes

- NewsAPI free tier has restrictions on deployed domains; using proxy avoids this.

- localStorage caching drastically improves performance.

## 📧 Contributing

Contributions are welcome. If you want to contribute:

1. Fork the repo
2. Create a feature branch `git checkout -b feature/your-feature`
3. Commit your changes `git commit -m "feat: add ..."`
4. Push and open a pull request

## 📄 License

```
This project is open-source and available under the [MIT License]
```

## 👨🏻‍💻 Author

Mohd Kamran Khan | You can reach me at: [mohdkamrankhan.dev@gmail.com]

🌐 **Portfolio:** [mohdkamran-khan.github.io/KAMRAN-portfolio](https://mohdkamran-khan.github.io/KAMRAN-portfolio/) 
