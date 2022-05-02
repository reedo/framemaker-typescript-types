(function () {
	var BASE_DIR =
		'C:/Vistair/FMConfig/FM16/ExtendScripts/types/framemaker-typescript-types/f_api/objects/';

	var objectName = 'FmtRule';

	var fileStr =
		'// Type definitions for FrameMaker ' +
		objectName +
		' object' +
		'\n// Definitions by Dan Reed <https://danreed.dev>' +
		'\n\n' +
		'interface ' +
		objectName +
		' {\n';

	// ==================================================
	// Setup an instance of the target object.
	// ==================================================

	var doc = app.ActiveDoc;
	var targetObj = doc.ElementSelection.beg.child.ElementDef.NewFirstPgfRules();

	// ==================================================

	/** @type {ReflectionInfo[]} */
	var props = targetObj.reflect.properties;
	props.sort();

	for (var i = 0; i < props.length; i++) {
		if (props[i].name !== '__proto__') {
			appendProperty(props[i]);
		}
	}

	/** @type {ReflectionInfo[]} */
	var methods = targetObj.reflect.methods;
	methods.sort();

	for (var i = 0; i < methods.length; i++) {
		appendMethod(methods[i]);
	}

	// Append the last brace.
	fileStr += '\n}\n';

	// Write file.
	var file = new File(BASE_DIR + objectName + '.d.ts');
	if (!file.open('w')) {
		throw new Error('Cannot create new file');
	}

	file.write(fileStr);
	file.close();

	Console('' + file.fsName + ' created');

	// HELPERS

	/**
	 *
	 * @param {ReflectionInfo} info
	 */
	function appendProperty(info) {
		fileStr += '\n\t';

		if (info.type === 'readonly') {
			fileStr += 'readonly ';
		}

		var type;
		if (
			targetObj[info.name] !== null &&
			typeof targetObj[info.name] === 'object'
		) {
			type = targetObj[info.name].constructor.name;
		} else {
			type = typeof targetObj[info.name];
		}

		fileStr += info.name + ': ' + type + ',\n';
	}

	/**
	 *
	 * @param {ReflectionInfo} info
	 */
	function appendMethod(info) {
		fileStr += '\n\t';

		if (info.type === 'readonly') {
			fileStr += 'readonly ';
		}

		fileStr += info.name + '(...args: any): ' + info.dataType + ',\n';
	}
})();
