// style-dictionary.config.js
export default {
  source: ['design-tokens/**/*.json'],
  preprocessors: {
    // Cualquier preprocesador personalizado aquí
  },
  platforms: {
    // 📱 CSS Variables
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables',
        options: {
          selector: ':root'
        }
      }]
    },
    
   
    
    // ⚡ JavaScript/React (ES Modules)
    js: {
      transformGroup: 'js',
      buildPath: 'src/tokens/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }]
    },
    
    // 🌊 JavaScript Object para Tailwind
    tailwind: {
      transformGroup: 'js',
      buildPath: 'src/tokens/',
      files: [{
        destination: 'tailwind-tokens.js',
        format: 'javascript/object'
      }]
    }
  }
};