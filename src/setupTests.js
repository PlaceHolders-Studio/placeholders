import '@testing-library/jest-dom';

// jsdom doesn't implement matchMedia — Header.js uses it for theme detection
if (!window.matchMedia) {
  window.matchMedia = () => ({
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {},
  });
}
