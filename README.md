# Portfolio Website - Umar AI Devs

A modern, responsive portfolio website built with React, featuring AI/ML development services, projects showcase, and contact functionality.

## 🚀 Features

- **Modern Design**: Professional dark/light theme with smooth transitions
- **Responsive**: Fully responsive design for all devices
- **Interactive UI**: Smooth animations and hover effects
- **Contact Form**: Integrated with Web3Forms for email notifications
- **Theme Toggle**: Switch between dark and light themes
- **Scroll to Top**: Floating button for easy navigation
- **Project Showcase**: Display of AI/ML and web development projects
- **Skills Section**: Comprehensive display of technical skills and tools
- **Team Section**: Meet the team with detailed profiles

## 🛠️ Technologies Used

- **Frontend**: React 19.2.0
- **Routing**: React Router DOM 7.13.0
- **Styling**: CSS3 with custom properties
- **Icons**: Font Awesome 7.1.0
- **Animations**: AOS (Animate On Scroll) 2.3.4
- **Build Tool**: Vite 7.2.4
- **Form Handling**: Web3Forms API

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📧 Contact Form Setup

The contact form uses Web3Forms. To set up:

1. Get your access key from [Web3Forms](https://web3forms.com)
2. Update the access key in `src/pages/Contact.jsx`:
```javascript
formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
```

## 🎨 Theme Customization

Edit theme colors in `src/index.css`:

```css
:root[data-theme="dark"] {
  --bg-primary: #0f172a;
  --accent-blue: #3b82f6;
  /* ... more colors */
}
```

## 📱 Pages

- **Home**: Hero section, services, projects, team
- **About**: Personal information, stats, journey
- **Skills/Services**: Technical skills and services offered
- **Projects**: Portfolio of completed projects
- **Contact**: Contact form and information

## 🔧 Configuration

### Vite Config
The project uses Vite for fast development and optimized builds. Configuration is in `vite.config.js`.

### ESLint
Code quality is maintained with ESLint. Configuration is in `eslint.config.js`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Umar Farooq**
- Email: umaraidevs@gmail.com
- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ by Umar AI Devs
