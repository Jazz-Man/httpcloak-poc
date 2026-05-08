import httpcloak from "httpcloak";
import debug from "./utils/debug";
import { getProxyUrl } from "./utils/tor-proxy-url";

const session3 = new httpcloak.Session({
	preset: "chrome-latest",
	// preferIpv4: true,
	tcpProxy: getProxyUrl(),
	allowRedirects: true,
});

// // Set cookies manually
session3.setCookie("user_id", "12345");
session3.setCookie("preferences", "dark_mode");

// // Check cookies
// console.log(`Cookies set:`, session3.getCookiesDetailed());

// Make request with cookies
const r = await session3.get(
	`${process.env.TEST_HOST_URL}/.well-known/private-token-issuer-directory`,
);
debug(session3.getCookiesDetailed());
debug(r);

session3.save("session.json");
