let arrayObj = [{
	prop_1: 'val',
	prop_2: 'val_12',
	prop_3: 'val_13'
}, {
	prop_1: 'val',
	prop_2: 'val_22',
	prop_3: 'val_23'
}];

function GFG_Fun() {
	let prop = 'prop_2';
	let val = 'val_22';
	console.log("Index of prop = "
		+ prop + " val = " + val +
		" is = " +
		arrayObj.map(function (e) {
			return e.prop_2;
		}).indexOf(val));
}

GFG_Fun();
