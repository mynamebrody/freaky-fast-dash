const user_config = require('./user.json');

const customer = user_config["Customer"];

function functiontofindIndexByKeyValue(arraytosearch, key, valuetosearch) {
	for (var i = 0; i < arraytosearch.length; i++) {
		if (arraytosearch[i][key] == valuetosearch) {
			return i;
		}
	}
	return null;
}

let addresses = customer.CustomerAddresses.Addresses;

// WIP: Proving that I can grab Addresses, Favorite Orders, Payment details by their Friendly Name
var index = functiontofindIndexByKeyValue(addresses, "FriendlyName", "Freaky Fast Dash");

console.log(index);
console.log(addresses[index]);