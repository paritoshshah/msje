var system = require('system');
var args = system.args;

if (args.length < 2) {
	console.log('Usage: phantomjs scraper.js [street-url]');
	console.log('Where [street-url] is a blockshopper.com street url');
	phantom.exit();
}

function fetch(url, callback) {
	var page = require('webpage').create();
	page.open(url, function(status) {
		if ( status === 'fail') {
			console.log('failed to open ' + url);
			phantom.exit();
		} else {
			callback(page);
		}
	});
}

function scrape_ownership(url) {
	fetch(url, function(page) {
		ownership = page.evaluate(function() {
			properties = document.getElementsByClassName('property-filter-row');

			var result = "";
			for(var i=0; i<properties.length; i++) {
				result += (properties[i].childNodes[1].childNodes[1].innerText + ", " + properties[i].childNodes[3].childNodes[3].innerText);
				if(i != properties.length-1) result += "\n";
			}

			return result;
		});
		
		console.log(ownership);
		page.close();
		phantom.exit();
	});
}

scrape_ownership(args[1]);
