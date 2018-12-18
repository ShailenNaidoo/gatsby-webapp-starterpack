const { name, description, color } = require('./app.json');


const themeConfig = {
  colors: {
    primary: color,
  },
};


module.exports = {
  title: name,
  description,
  base: '/docs/',
  codeSandbox: false,
  files: '**/*.{md,mdx}',
  themeConfig,
};
