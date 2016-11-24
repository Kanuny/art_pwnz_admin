module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "rules": {
    "generator-star-spacing": 0,
    "react/no-multi-comp": 0,
    "react/jsx-filename-extension": 0,
    "react/require-extension": 0,
    "import/no-named-as-default": 2,
    "import/extensions": [2, "never"],
    "import/imports-first": 0,
    "import/order": ["error", {
      "groups": [
        ["builtin", "external"],
        "parent",
        "internal",
        "sibling",
        "index"
      ],
      "newlines-between": "always"
    }],
    "max-len": 1,
    "indent": [2, 2, {"SwitchCase": 1}],
    "no-console": 0,
    "no-alert": 0,
    "react/sort-comp": [2, {
      "order": [
        "static-methods",
        "props",
        "state",
        "constructor",
        "everything-else",
        "lifecycle",
        "/^(on|handle|toggle).+$/",
        "/^render.+$/",
        "render"
      ]
    }],
    "jsx-a11y/label-has-for": 0,
    "flowtype/define-flow-type": 1,
    "flowtype/require-parameter-type": 0,
    "flowtype/require-return-type": [0, "always", {
      "annotateUndefined": "never"
    }],
    "flowtype/space-after-type-colon": [1, "always" ],
    "flowtype/space-before-type-colon": [1, "never" ],
    "flowtype/type-id-match": [1, "^([A-Z][a-z0-9]+)+Type$"],
    "flowtype/use-flow-type": 1
  },
  "plugins": [
    "react", "import", "flowtype"
  ],
  "settings": {
    "import/parser": "babel-eslint",
    "import/resolver": {
      "webpack": {
        "config": "./config/webpack.config.dev.js"
      }
    },
    "import/ignore": ["\\.(scss|css|png|jpg)$"]
  },
};
