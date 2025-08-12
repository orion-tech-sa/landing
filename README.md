# Orion AI Landing Page

A modern, interactive landing page for Orion AI - a next-generation artificial intelligence and data analytics platform. Built with React, TypeScript, and Vite for optimal performance and developer experience.

## 🚀 Features

- **Interactive Hero Section** with mouse-following gradient effects
- **Responsive Design** that works seamlessly across all devices
- **Modern UI Components** including Header, Hero, About, Services, Innovation, and Footer sections
- **Lightning Fast Performance** powered by Vite build tool
- **TypeScript Support** for enhanced development experience
- **ESLint Integration** for code quality and consistency

## 🛠 Tech Stack

- **Frontend Framework:** React 18.2.0
- **Language:** TypeScript 5.2.2
- **Build Tool:** Vite 5.2.0
- **Styling:** CSS with modern features and animations
- **Code Quality:** ESLint with TypeScript support

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd orion-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🔧 Development

### Available Scripts

- **`npm run dev`** - Start the development server
- **`npm run build`** - Build the project for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint for code quality checks

### Development Server

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is occupied).

## 🏗 Build

To create a production build:

```bash
npm run build
```

The built files will be generated in the `dist/` directory.

## 📁 Project Structure

```
orion-landing/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Main hero section with interactive effects
│   │   ├── About.tsx        # About section
│   │   ├── Services.tsx     # Services showcase
│   │   ├── Innovation.tsx   # Innovation highlights
│   │   └── Footer.tsx       # Footer component
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
├── dist/                   # Production build output
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## 🎨 Key Components

### Hero Section
- Interactive gradient background that follows mouse movement
- Animated brand icon with floating effect
- Call-to-action buttons for user engagement
- Feature highlights showcasing platform capabilities

### Component Architecture
- **Header**: Navigation and branding
- **Hero**: Main landing section with interactive elements
- **About**: Platform overview and value proposition
- **Services**: Available services and offerings
- **Innovation**: Technology and innovation highlights
- **Footer**: Contact information and links

## 🚀 Deployment

The project is configured for deployment on Vercel (see `vercel.json`). For deployment:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform:**
   - Vercel: Connect your repository for automatic deployments
   - Netlify: Deploy the `dist/` folder
   - Other platforms: Upload the contents of `dist/` folder

## 🔧 Configuration

### TypeScript
The project uses TypeScript with strict mode enabled. Configuration can be found in:
- `tsconfig.json` - Main TypeScript config
- `tsconfig.node.json` - Node-specific TypeScript config

### Vite
Vite configuration is in `vite.config.ts` with React plugin support.

### ESLint
Code quality is maintained through ESLint with TypeScript and React plugins.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Orion AI.

## 📞 Contact

For questions or support regarding this landing page, please contact the development team.

---

**Built with ❤️ for the future of AI**