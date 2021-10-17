# typedoc-test-theme

Build the theme:

1. `npm i`
2. `npm run build`

Use the theme in the demo:

1. `cd demo`
2. `npm i`
3. `npm run build`

Expected:

The deault theme to be used, and a custom tag added to the header.

Actual:

```log
TypeDoc exiting with unexpected error:
AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:

  (0, assert_1.ok)(reflection instanceof models_1.DeclarationReflection)

    at assertIsDeclarationReflection (.../typedoc-test-theme/node_modules/typedoc/dist/lib/output/themes/lib.js:62:21)
    at .../typedoc-test-theme/node_modules/typedoc/dist/lib/output/themes/default/partials/members.group.js:18:117
    at Array.map (<anonymous>)
    at membersGroup (.../typedoc-test-theme/node_modules/typedoc/dist/lib/output/themes/default/partials/members.group.js:18:24)
    at TestThemeContext.membersGroup (.../typedoc-test-theme/node_modules/typedoc/dist/lib/output/themes/default/DefaultThemeRenderContext.js:30:22)
    at .../typedoc-test-theme/node_modules/typedoc/dist/lib/output/themes/default/partials/members.js:13:186
    at Array.map (<anonymous>)
    at members (.../typedoc-test-theme/node_modules/typedoc/dist/lib/output/themes/default/partials/members.js:13:126)
    at TestThemeContext.members (.../typedoc-test-theme/node_modules/typedoc/dist/lib/output/themes/default/DefaultThemeRenderContext.js:30:22)
    at reflectionTemplate (.../typedoc-test-theme/node_modules/typedoc/dist/lib/output/themes/default/templates/reflection.js:41:17) {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: false,
  expected: true,
  operator: '=='
}
```