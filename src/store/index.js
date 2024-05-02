import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '/threejs.png', // Absolute path to the logo image
  fullDecal: '/threejs.png', // Absolute path to the full image
});

export default state;
