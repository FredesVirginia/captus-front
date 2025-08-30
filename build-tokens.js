import StyleDictionary from 'style-dictionary';
import config from './style-dictionary.config.js';

console.log('🌱 Construyendo tokens de Terra Nova...');

const sd = new StyleDictionary(config);

await sd.buildAllPlatforms();

console.log('✅ Tokens construidos exitosamente!');