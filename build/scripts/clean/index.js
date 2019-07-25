const cleanScript = require('./clean')

let doClean = async () => {
	await cleanScript(['libs/*.js', 'dist/*.js', 'dist/*.js.map'])
}

doClean()
