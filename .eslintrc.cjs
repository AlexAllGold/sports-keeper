module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended-type-checked', 'airbnb-base'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        "indent": "off",
        "max-len": "off",
        "import/prefer-default-export": "off",
        "import/named": "off",
        "class-methods-use-this": "off",
        "import/no-cycle": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "object-curly-newline": [
            "error",
            {
                "ObjectExpression": "always",
                "ObjectPattern": { "multiline": true },
                "ImportDeclaration": { "multiline": true, "minProperties": 7 },
                "ExportDeclaration": "never"
            }
        ]
    }
}