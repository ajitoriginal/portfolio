# Personal Portfolio

A modern, responsive portfolio website built with React.js and deployed on GitHub Pages.

## Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Beautiful animations powered by Framer Motion
- **Fast**: Built with Vite for optimal performance
- **Sections**:
  - Hero section with call-to-action
  - About me section
  - Skills showcase
  - Project portfolio
  - Contact form
  - Social links

## Tech Stack

- **React.js** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Fix npm cache permissions (if needed):
   ```bash
   sudo chown -R $(id -u):$(id -g) "$HOME/.npm"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Update Personal Information

1. **Hero Section** ([src/components/Hero.jsx](src/components/Hero.jsx)):
   - Update name, title, and description
   - Change social media links

2. **About Section** ([src/components/About.jsx](src/components/About.jsx)):
   - Update bio and experience details

3. **Skills Section** ([src/components/Skills.jsx](src/components/Skills.jsx)):
   - Add or remove skills from the `skills` array

4. **Projects Section** ([src/components/Projects.jsx](src/components/Projects.jsx)):
   - Update the `projects` array with your actual projects
   - Add project images, descriptions, and links

5. **Contact Section** ([src/components/Contact.jsx](src/components/Contact.jsx)):
   - Update email, phone, and location
   - Change social media links

6. **Site Title** ([index.html](index.html)):
   - Update the `<title>` tag

### Update Base URL

In [vite.config.js](vite.config.js), update the `base` property to match your GitHub repository name:

```javascript
base: '/your-repo-name/',
```

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

1. Go to your repository Settings > Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push your code to the main branch
4. The site will be automatically built and deployed

### Option 2: Manual Deployment

1. Install gh-pages:
   ```bash
   npm install
   ```

2. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## License

This project is open source and available under the MIT License.

## Contact

John Doe - johndoe@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
