const testFiles = require.context('./tests', true, /\.test\.js$/)

testFiles.keys().forEach(testFiles)
