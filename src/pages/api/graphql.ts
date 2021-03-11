export default async (req, res) => {
	res.statusCode = 200;
	await fetch(process.env.API_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': '/applicationjson',
			authorization: `Bearer ${process.env.BEARER_TOKEN}`,
		},
		body: JSON.stringify({
			query: `{devTo(auths:{devToAuth:{apiKey:"${process.env.DEVTO_KEY}"}}) {` + req.body + '}}',
		}),
	})
		.then((r) => r.json())
		.then((r) => res.json(r.data.devTo));
};
