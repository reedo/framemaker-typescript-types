(function () {

	// -------------------- EXAMPLE --------------------
	var folder = new Folder('/C/Users/');
	var markdownFile = printObjectToMd(folder, Folder.desktop + '/Doc.md');
	markdownFile.execute();

})();

/**
 * Creates a markdown file (*.md) documenting an extendscript object.
 * @param {Object} object The object to document.
 * @param {File | string} fileName The File object or filename string.
 */
function printObjectToMd(object, fileName) {
	var reflection; // The details of the object.
	var mdFile; // The file to write to.
	var tableData; // Data to print as a table. 3D array of strings.

	/**
	 * Appends a line of text to the target file.
	 * @param {string} text The text to append.
	 * @param {File | string} fileName The File object or filename string.
	 */
	function appendLineToFile(text) {
		var file; // The target file.

		// create file
		if (fileName.constructor.name === 'File') {
			file = fileName;
		} else {
			file = new File(fileName);
		}

		// open file in append mode
		if (!file.open('a')) {
			throw new Error("appendLineToFile: Could not open file '" + file.name + "'");
		}

		// write the text line to the file
		if (!file.writeln(text)) {
			throw new Error("appendLineToFile: Could not write '" + text + "' to file '" + file.name + "'");
		}

		// close the file
		if (!file.close()) {
			throw new Error("appendLineToFile: Could not close file '" + file.name + "'");
		}

		return true;
	}

	/**
	 * Appends a markdown table to the target file.
	 * @param {string} title Title of the table.
	 * @param {string[]} headings Array of headings for the table.
	 * @param {string[][]} data 3D array of strings representing the table content.
	 */
	function appendTableToFile(title, headings, data) {
		var numberOfColumns; // Number of table columns.
		var divider; // An array of '---' strings.

		/**
		 * Prints a table row in markdown format.
		 * @param {string[]} rowData Array of strings for each cell in the row.
		 */
		function writeTableRow(rowData) {
			var text = ''; // Text to write.

			for (var i = 0; i < numberOfColumns; i++) {
				if (i !== numberOfColumns - 1) {
					text += rowData[i] + ' | ';
				} else {
					text += rowData[i];
				}
			}
			appendLineToFile(text);
		}

		numberOfColumns = headings.length;

		// write title
		appendLineToFile(title);

		// write table headings
		writeTableRow(headings);
		divider = [];
		for (var i = 0; i < numberOfColumns; i++) {
			divider.push('---');
		}
		writeTableRow(divider);

		// write table data
		for (var i = 0; i < data.length; i++) {
			writeTableRow(data[i]);
		}
	}

	/**
	 * Writes the object's properties to the file.
	 * @param {string} title Section title.
	 * @param {ReflectionInfo[]} props Reflection properties.
	 */
	function writeProps(title, props) {
		var tableData = []; // The data for the table.
		var name; // The property name.
		var dataType; // The data type of the property.
		var readWriteType; // The read/write status of the property.
		var desiredProp; // The property to find if the Reflection data is unknown.

		for (var i = 0; i < props.length; i++) {
			name = props[i].name;
			dataType = props[i].dataType;
			readWriteType = props[i].type;

			if (dataType === 'unknown') {
				desiredProp = dataType = object[name];
				if (desiredProp !== null) {
					dataType = desiredProp.constructor.name;
				} else {
					dataType = 'null';
				}
			}

			if (name !== '__proto__') {
				tableData.push([name, dataType, readWriteType]);
			}
		}
		appendTableToFile(title, ['name', 'data type', 'r/w'], tableData);
	}

	/**
	 * Writes the object's methods to the file.
	 * @param {string} title Section title.
	 * @param {ReflectionInfo[]} methods Reflection methods.
	 */
	function writeMethods(title, methods) {
		var args; // The arguments for a particular method.
		var argString; // String representation of the args.
		var tableData = []; // The data for the table.

		for (var i = 0; i < methods.length; i++) {
			args = methods[i].arguments;
			argString = '';
			if (args.length > 0) {
				for (var j = 0; j < args.length; j++) {
					if (j !== args.length - 1) {
						argString += args[j].name + ': ' + args[j].dataType + ', ';
					} else {
						argString += args[j].name + ': ' + args[j].dataType;
					}
				}
			}
			tableData.push([methods[i].name, argString, methods[i].dataType]);
		}
		appendTableToFile(title, ['name', 'arguments', 'return type'], tableData);
	}

	// create file
	if (fileName.constructor.name === 'File') {
		mdFile = fileName;
	} else {
		mdFile = new File(fileName);
	}

	Console("printObjectToMd: Creating file '" + mdFile.name + "'");

	// open the file for writing, then close it. This wipes any existing content in the file
	if (!mdFile.open('w')) {
		Console("printObjectToMd: Cannot open file '" + mdFile.name + "'");
		return false;
	}
	if (!mdFile.close()) {
		Console("printObjectToMd: Cannot close file '" + mdFile.name + "'");
		return false;
	}

	// get the Reflection of the target object
	reflection = object.reflect;

	Console("printObjectToMd: Writing to file...");
	try {

		// write object name as header
		appendLineToFile("# " + reflection.name);
		// write description
		appendLineToFile(reflection.description);
		// write properties
		writeProps('## properties', reflection.properties);
		// write methods
		writeMethods("## methods", reflection.methods);
		// write static properties
		writeProps('## static properties', reflection.staticProperties);
		// write static methods
		writeMethods("## static methods", reflection.staticMethods);

	} catch (error) {
		Console("printObjectToMd: Writing to file failed with error: " + error.message);
		return false;
	}
	Console("printObjectToMd: Complete.");
	return mdFile;
}