
<a href="https://snappy-ui-nu.vercel.app/">
  <h1 align="center">Snappy UI</h1>
</a>

<p align="center">
  A minimal and intuitive component library.
</p>

<br>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a>
  ·&nbsp;<a href="#features"><strong>Features</strong></a>
  ·&nbsp;<a href="#tech-stack"><strong>Tech Stack</strong></a>
  ·&nbsp;<a href="#contributing"><strong>Contributing</strong></a>
</p>
<br>

## <a name="introduction">📌 &nbsp; Introduction</a>

Snappy UI is a **lightweight and efficient** component library designed to help you **build user interfaces** effortlessly. Whether you're creating personal projects or professional web applications, Snappy UI provides a clean, responsive, and user-friendly set of components.

<br>

## <a name="features">🚀 &nbsp; Features</a>

- **Pre-built Components**: Use a variety of ready-to-use UI components like buttons, forms, modals, and more.

- **Customizable Themes**: Easily customize the look and feel using Tailwind CSS utility classes.

- **React & TypeScript Integration**: Build applications with type safety and modern JavaScript features.

- **Responsive Design**: Components are fully responsive and adapt seamlessly across all devices.

- **Light & Dark Mode**: Toggle between light and dark themes for a better user experience.

- **Smooth Animations**: Enjoy smooth and polished animations for a better UI experience.

- **Easy Setup**: Get started quickly with minimal configuration.

- **Version Control**: Integrated with Git for seamless version control and collaboration.

- **Deployment with Vercel**: Easily deploy your application to the cloud with Vercel.

<br>

## <a name="tech-stack">⚙️ &nbsp; Tech Stack</a>

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) – structuring

- [Tailwind CSS](https://tailwindcss.com/) – utility-first styling

- [React](https://reactjs.org/) – ui library

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – functionality

- [TypeScript](https://www.typescriptlang.org/) – typed javaScript

- [Git](https://git-scm.com/) – version control

- [Vercel](https://vercel.com/) – deployment

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
import reactDom from "eslint-plugin-react-dom";
// eslint.config.js
import reactX from "eslint-plugin-react-x";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

