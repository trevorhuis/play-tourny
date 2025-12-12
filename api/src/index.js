/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => {
	const sql = new Client({
		connectionString: env.HYPERDRIVE.connectionString,
	});

	c.text('Hello Cloudflare Workers!')
})

export default app
