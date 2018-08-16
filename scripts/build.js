const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const pkgrc = require('../package')
const webpackrc = require('../webpack.config')
const mainfestrc = require('../public/manifest')

const MAINFEST_PATH = path.resolve(__dirname, '../public/manifest.json')

mainfestrc.version = pkgrc.version

fs.writeFileSync(MAINFEST_PATH, JSON.stringify(mainfestrc, null, 2), 'utf-8')

complier = webpack(webpackrc)

complier.run()
