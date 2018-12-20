const { name, description, color } = require('./src/tooling/starterpack/config.json');


const themeConfig = {
  colors: {
    primary: color,
  },
};


module.exports = {
  title: name,
  description,
  src: './src/',
  codeSandbox: false,
  files: '**/*.{md,mdx}',
  themeConfig,
};
