import js from '@eslint/js'
import globals from 'globals'
import reactRecommended from 'eslint-plugin-react/configs/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig } from '@eslint/config'
import { globalIgnores } from 'eslint/use-at-your-own-risk'

export default defineConfig([
  globalIgnores(['dist']),
  js.configs.recommended,
  reactRecommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module'
      }
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
])