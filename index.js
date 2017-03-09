const path = require('path');
const jsonfile = require('jsonfile'); jsonfile.spaces = 2;

module.exports = (taskName, command) => {
	const pathToRootPackageJson = path.join(pathToRoot, 'package.json');

	jsonfile.readFile(path.join(pathToRoot, 'package.json'), (err, packageJson) => {
		if (err) throw err;

		packageJson[taskName] = command;
		jsonfile.writeFileSync(pathToRootPackageJson, packageJson);
	});
}
