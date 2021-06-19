module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    __dirname: false,
  },
  rules: {
    'no-undefined': 'warn',
    'no-debugger': 'off',
    complexity: [
      'error',
      {
        max: 99,
      },
    ],
    // 这里填入你的项目需要的个性化配置，比如：
    // @fixable 一个缩进必须用两个空格替代
    indent: [
      1,
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
      },
    ],
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2],
    'react/no-string-refs': 1,
    'no-template-curly-in-string': 1,
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off',
    'react/no-unsafe': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'react/jsx-key': 0,
    'no-undef': 0,
  },
};
