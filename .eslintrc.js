module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "no-plusplus": 0,
        "no-param-reassign": 0,
        "comma-spacing": 0
    }
};

// If linter doesn't work
// (   export PKG=eslint-config-airbnb;   npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"; )