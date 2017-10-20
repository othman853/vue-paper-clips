import Vue from 'vue'

Vue.config.productionTip = false

const testFiles = require.context('./tests', true, /\.test\.js$/)

testFiles.keys().forEach(testFiles)
