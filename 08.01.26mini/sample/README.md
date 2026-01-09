# React Forms Collection

A React application built with Vite featuring multiple form components including Login, Todo List, Contact Form, and Subscription Form.

## 🚀 Features

- **Login Form** - User authentication form
- **Todo List** - Task management component
- **Contact Form** - Contact information submission form
- **Subscription Form** - Newsletter subscription form

## 📦 Tech Stack

- React 19.2.0
- Vite 7.2.4
- Modern ES6+ JavaScript

## 🛠️ Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🌐 Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Automatic Deployment via GitHub:**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the Vite configuration
   - The project will be deployed automatically on every push to main

2. **Manual Deployment:**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Vercel Configuration:**
   - Root Directory: `08.01.26mini/sample`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### GitHub Repository

Repository: [https://github.com/selvarajane/08.01.26mini.git](https://github.com/selvarajane/08.01.26mini.git)

## 📝 Project Structure

```
sample/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   ├── TodoList.jsx
│   │   ├── ContactForm.jsx
│   │   ├── SubscriptionForm.jsx
│   │   └── FormStyles.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## 🎯 Usage

After starting the development server, navigate to `http://localhost:5173` to see the application.

## 📄 License

This project is open source and available under the MIT License.
