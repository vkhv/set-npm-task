const path = require('path');
const jsonfile = require('jsonfile'); jsonfile.spaces = 2;
const pathToRoot = __dirname.split('node_modules')[0];

/**
 * Added task in package json.
 * @param {string} taskName - task name.
 * @param {string} command - comand.
 *
 */
module.exports = (taskName, command) => {
	const pathToRootPackageJson = path.join(pathToRoot, 'package.json');
	jsonfile.readFile(path.join(pathToRoot, 'package.json'), (err, packageJson) => {
		if (err) throw err;
		packageJson[taskName] = command;
		jsonfile.writeFileSync(pathToRootPackageJson, packageJson);
	});
}
