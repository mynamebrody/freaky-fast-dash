const dash_button = require('dash-button');
const jj = require('Jimmy-Johns');
const orderconfig = require('./order.json');

const DASH_BUTTON_MAC_ADDRESS = orderconfig["dashMacAddress"];

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);


let subscription = button.addListener(async () => {
	let user_data = orderconfig["user_data"];
	let order_items = [];
	jj.order(user_data, order_items, function(success, error) {
		if (!error) {
		console.log("SANDWICH EN ROUTE");
		}
	});
});
