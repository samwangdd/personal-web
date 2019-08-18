module.exports = {
  // extends: "airbnb",
  "extends": 'standard',
  "root": true,
  "parser": 'babel-eslint',
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": 'module',
    "ecmaFeatures": {
      "jsx": true,
      "module": true
    }
  },
  "env": {
    "browser": true,
  },
  "plugins": [
    'react',
    'react-hooks'
  ],
  "rules": {
    "semi": 0,
    "quotes": 0,
    "comma-dangle": 0,
    "space-before-function-paren": 0,
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"

  }
};
