const fs = require('fs');

function getKeyFromOptions({ options }) {
	const { settings, _locals, ...objectKeys } = options;

	return Object.assign(objectKeys);
}

function getRenderedContent({ data, options }) {
	const keys = getKeyFromOptions({ options });
	let contentString = data.toString();

	for (let key in keys) {
		contentString = contentString.replace(new RegExp(`\{${key}\}`, 'gi'), options[key]);
	}

	return contentString;
}

module.exports = function (filepath, options, callback) {
	fs.readFile(filepath, function (error, data) {
		if (error) {
			return callback(error.message);
		}
		const rendered = getRenderedContent({ data, options });
		return callback(null, rendered);
	});
};
