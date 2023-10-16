const path = require('node:path')
const fsPromise = require('node:fs/promises')
const fs = require('node:fs')
const glob = require('glob')
const prettier = require('prettier')
const { transform } = require('@svgr/core')

const prettierConfig = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../.prettierrc')).toString(),
)

const formatCode = (code) =>
  prettier.format(code, { parser: 'babel-ts', ...prettierConfig })

const kebab2Pascal = (inputStr) =>
  inputStr
    .split('-')
    .map((str) => str.slice(0, 1).toUpperCase() + str.slice(1, str.length))
    .join('')

const generateSvgs = () => {
  const svgFilePaths = glob.sync('./src/icons/svg/*.svg')

  //assets/icons/setting-bar.svg
  return Promise.all(
    svgFilePaths.map(async (svgFilePath) => {
      const content = await fsPromise.readFile(svgFilePath, {
        encoding: 'utf8',
      })
      //setting-bar
      const baseNameWithoutExtension = path.basename(svgFilePath, '.svg')
      //IconSettingBar
      const componentName = `Icon${kebab2Pascal(baseNameWithoutExtension)}`

      const code = await transform(
        content,
        {
          typescript: true,
          icon: true,
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        },
        { componentName },
      )

      await fsPromise.writeFile(
        path.resolve(
          __dirname,
          '../src/icons/components/',
          `icon-${baseNameWithoutExtension}.tsx`,
        ),
        await formatCode(code),
      )
    }),
  )
}

module.exports = {
  generateSvgs,
}