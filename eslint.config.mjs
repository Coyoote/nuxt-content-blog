import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt([
  {
    rules: {
      'ts/no-namespace': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/require-prop-types': 'off',
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 2,
          },
          multiline: {
            max: 1,
          },
        },
      ],
    },
  },
  eslintConfigPrettier,
])
