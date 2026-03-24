import { inspect } from "bun";

export default function debug(
	object: any,
	options: Bun.BunInspectOptions = {},
) {
	const debug = inspect(object, {
		colors: true,
		depth: 2,
		...options,
	});

	console.log(debug);
}
