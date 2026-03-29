'use strict';
const get_app_server = require('./app.js');
const database = require('./database.js');
const database_init = database.database_init;

(async () => {
	await database_init();
	const app = await get_app_server();
	const port = process.env.PORT || 80;
	app.listen(port, () => {
		console.log(`XSS Hunter Express listening on port ${port}`);
	});
})();
