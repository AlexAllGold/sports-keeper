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
        "no-unused-vars": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "linebreak-style": ["error", "windows"],
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
                "ObjectExpression": { "multiline": true },
                "ObjectPattern": { "multiline": true },
                "ImportDeclaration": { "multiline": true, "minProperties": 7 },
                "ExportDeclaration": "never"
            }
        ]
    }
}