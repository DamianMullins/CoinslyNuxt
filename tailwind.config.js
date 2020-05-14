/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {
    enabled: true,
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: ['dark-mode', 'light-mode']
    }
  },

  theme: {},

  variants: {
    display: ['responsive', 'after'],
    margin: ['responsive', 'after'],
    width: ['responsive', 'after'],
    borderWidth: ['responsive', 'after'],
    borderRadius: ['responsive', 'after'],
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'dark',
      'light',
      'after',
      'light:after',
      'dark:after'
    ],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'light', 'dark:hover', 'light:hover'],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'group-hover',
      'dark',
      'light',
      'dark:hover',
      'light:hover'
    ]
  },

  plugins: [
    plugin(function ({ addVariant, theme, e, prefix, config }) {
      const colorModeVariants = ['light', 'dark'];

      colorModeVariants.forEach(mode => {
        addVariant(mode, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${mode}-mode .${e(`${mode}${separator}${className}`)}`;
          });
        });
      });

      const pseudoVariants = ['after', 'before'];

      pseudoVariants.forEach(pseudo => {
        addVariant(pseudo, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(`${pseudo}${separator}${className}`)}::${pseudo}`;
          });
        });
      });

      // generate chained color mode and pseudo variants
      colorModeVariants.forEach(mode => {
        pseudoVariants.forEach(pseudo => {
          addVariant(`${mode}:${pseudo}`, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${mode}-mode .${e(
                `${mode}${separator}${pseudo}${separator}${className}`
              )}::${pseudo}`;
            });
          });
        });
      });

      // states for color modes
      const states = ['hover'];

      colorModeVariants.forEach(mode => {
        states.forEach(state => {
          addVariant(`${mode}:${state}`, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${mode}-mode .${e(
                `${mode}${separator}${state}${separator}${className}`
              )}:${state}`;
            });
          });
        });
      });
    })
  ]
};
