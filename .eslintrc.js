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
    'react'
  ],
  "rules": {
    "semi": 0,
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2
  }
};
