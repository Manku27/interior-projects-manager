import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});
const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:prettier/recommended',
      'prettier'
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ],
      'jsx-quotes': ['error', 'prefer-double'],
      'import/extensions': [
        'warn',
        {
          js: 'never',
          jsx: 'never',
          json: 'never',
          css: 'always',
          server: 'always',
          client: 'always'
        }
      ],
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
          groups: ['builtin', 'external', 'internal'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          pathGroupsExcludedImportTypes: ['react']
        }
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ]
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true
        }
      }
    }
  }),
  { ignores: ['**/*.generated.ts'] }
];

export default eslintConfig;
