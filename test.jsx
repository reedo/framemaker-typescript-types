(function () {
	var attrDef = new AttributeDef(
		'foo',
		true,
		Constants.EXCLUDE_NONE,
		Constants.FV_AF_READ_ONLY,
		new Strings('one', 'two', 'three'),
		new Strings('four', 'five', 'six'),
		'',
		''
	);

	Console('Done');
})();
