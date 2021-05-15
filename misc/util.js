module.exports = {
	xmlFail(message = "Somthing must have failed when trying to do somthing. please try again later or use somthing different.") {
		return `<error><code>ERR_ASSET_404</code><message>${message}</message><text></text></error>`;
	},
};
