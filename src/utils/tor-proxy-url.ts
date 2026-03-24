import { randomUUIDv7 } from "bun";

export const getRandomUsername = (): string => `x${randomUUIDv7()}x`;

export const getProxyUrl = (username: string = getRandomUsername()) => {
	const proxy = new URL("socks5://127.0.0.1");

	proxy.port = "9050";
	proxy.password = "pass";
	proxy.username = username;

	return proxy.toString();
};
