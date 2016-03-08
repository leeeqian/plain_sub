var PlainSub = function (text) {
	var dialogs = text.match(/^Dialogue: .*$/gm);
	var caps = [];
	for(var i = 0; i < dialogs.length; i++) {
		var sections = dialogs[i];
		var cap = sections.substr(63);
		cap = cap.replace(/\{.*?\}/g, '');
		cap = cap.replace(/\\N/g, '\r\n');
		caps.push(cap);
	}
	return caps.join('\r\n');
};