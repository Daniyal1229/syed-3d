# 🚗 Daniyal Syed - 3D Portfolio City

An interactive 3D portfolio experience where you drive through a virtual city to explore my professional journey!

## 🎮 Features

- **Interactive 3D Environment**: Drive a red car through a low-poly Monument Valley-style city
- **Portfolio Sections**:
  - 🏠 Home Area - Contact Information
  - 🎓 Education District - Academic Journey (School, College, University)
  - 🌉 Wooden Bridge - Transition Element
  - 💼 Experience Zone - Professional Work
  - 🎡 Tech Park - Interactive Tech Stack Display (Animated Ferris Wheel & Carousel)
  - 🚀 Projects Boulevard - Major Projects Showcase

- **Dynamic Environment**:
  - ☀️ Day/Night Toggle
  - 🌧️ Weather Effects (Clear, Rain, Snow)
  - 💡 Street Lights (Animated at night)
  - 🎵 Background Music

- **User Experience**:
  - Automatic info popups when entering zones
  - Mini-map for navigation
  - Smooth camera following
  - Keyboard controls (Arrow keys)

## 🛠️ Tech Stack

- **React** - UI Library
- **Vite** - Build Tool
- **Three.js** - 3D Graphics
- **React Three Fiber** - React Renderer for Three.js
- **React Three Drei** - Helper Components
- **Zustand** - State Management
- **Framer Motion** - Animations

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Controls

- **⬆️ Arrow Up**: Move Forward
- **⬇️ Arrow Down**: Move Backward
- **⬅️ Arrow Left**: Turn Left
- **➡️ Arrow Right**: Turn Right

### Environment Controls

- **☀️/🌙 Button**: Toggle between day and night
- **Weather Button**: Cycle through weather effects (Clear → Rain → Snow)
- **🔊/🔇 Button**: Toggle background music

## 📁 Project Structure

```
daniyal-3d-portfolio/
├── public/
│   ├── fonts/          # Custom fonts (if any)
│   └── music/          # Background music file
├── src/
│   ├── components/
│   │   ├── Car/
│   │   │   └── Car.jsx
│   │   ├── City/
│   │   │   ├── City.jsx
│   │   │   ├── Ground.jsx
│   │   │   ├── Roads.jsx
│   │   │   ├── EntranceGate.jsx
│   │   │   ├── HomeArea.jsx
│   │   │   ├── EducationDistrict.jsx
│   │   │   ├── WoodenBridge.jsx
│   │   │   ├── ExperienceZone.jsx
│   │   │   ├── TechPark.jsx
│   │   │   ├── ProjectsBoulevard.jsx
│   │   │   └── StreetLights.jsx
│   │   ├── Scene/
│   │   │   ├── CameraController.jsx
│   │   │   ├── Lighting.jsx
│   │   │   └── Weather.jsx
│   │   ├── UI/
│   │   │   ├── UI.jsx
│   │   │   ├── InfoPopup.jsx
│   │   │   ├── Controls.jsx
│   │   │   ├── MiniMap.jsx
│   │   │   ├── MusicController.jsx
│   │   │   ├── WelcomeSign.jsx
│   │   │   └── LoadingScreen.jsx
│   │   └── Experience.jsx
│   ├── store/
│   │   └── useStore.js
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Philosophy

The portfolio follows a **low-poly, Monument Valley-inspired aesthetic** with:
- Vibrant, cartoonish colors
- Geometric shapes and clean lines
- Smooth animations
- Interactive elements
- Intuitive navigation

## 📱 Responsive Design

The application is optimized for desktop browsers. Mobile support can be added with touch controls.

## 🎵 Adding Background Music

1. Add your music file to `public/music/background.mp3`
2. The music will automatically loop when enabled
3. Users can toggle music with the speaker button

## 🚧 Future Enhancements

- [ ] Touch controls for mobile devices
- [ ] More interactive elements in each zone
- [ ] Particle effects
- [ ] Sound effects for car movement
- [ ] Additional portfolio sections
- [ ] VR support

## 👨‍💻 About Me

**Daniyal Syed** - MERN Stack Software Developer

- 📧 syeddaniyalbokhari72@gmail.com
- 📱 9353252474
- 📍 Bangalore, Karnataka
- 🔗 [GitHub](https://github.com/syeddaniyal)
- 💼 [LinkedIn](https://linkedin.com/in/syeddaniyal)

**Skills**: React.js, TypeScript, JavaScript, Node.js, Express.js, MongoDB, Socket.IO, Material-UI, Chakra UI, and more!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Three.js community
- React Three Fiber documentation
- Monument Valley for design inspiration

---

**Built with ❤️ by Daniyal Syed**

