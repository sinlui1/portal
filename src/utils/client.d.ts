// Generated by dts-bundle-generator v9.5.1

import { JwtVariables } from 'hono/jwt';

export type JWTContent = {
	sub: string;
	name: string;
	picture: string;
	givenName: string;
	familyName: string;
	exp: number;
};
export type HonoVariables = JwtVariables<JWTContent>;
declare const app: import("hono/hono-base").HonoBase<{
	Variables: HonoVariables;
}, ((import("hono/types").BlankSchema | import("hono/types").MergeSchemaPath<{
	"/*": {};
} & {
	"/links": {
		$get: {
			input: {};
			output: {
				tags: {
					name: string;
				}[];
				links: {
					id: number;
					title: string;
					description: string;
					url: string;
					iconUrl: string;
				}[];
				id: number;
				name: string;
				lexorank: string;
				createdAt: string;
				updatedAt: string;
			}[];
			outputFormat: "json";
			status: import("hono/utils/http-status").ContentfulStatusCode;
		};
	};
} & {
	"/categories": {
		$post: {
			input: {
				json: {
					name: string;
					lexorank?: string | undefined;
				};
			};
			output: {
				id: number;
				name: string;
				lexorank: string;
				createdAt: string;
				updatedAt: string;
			};
			outputFormat: "json";
			status: import("hono/utils/http-status").ContentfulStatusCode;
		};
	};
} & {
	"/categories/:id": {
		$put: {
			input: {
				json: {
					name: string;
					lexorank?: string | undefined;
				};
			} & {
				param: {
					id: string;
				};
			};
			output: {
				id: number;
				name: string;
				lexorank: string;
				createdAt: string;
				updatedAt: string;
			};
			outputFormat: "json";
			status: import("hono/utils/http-status").ContentfulStatusCode;
		};
	};
} & {
	"/categories/:id": {
		$delete: {
			input: {
				param: {
					id: string;
				};
			};
			output: {
				id: number;
				name: string;
				lexorank: string;
				createdAt: string;
				updatedAt: string;
			};
			outputFormat: "json";
			status: import("hono/utils/http-status").ContentfulStatusCode;
		};
	};
} & {
	"/links": {
		$post: {
			input: {
				json: {
					title: string;
					description: string;
					url: string;
					iconUrl: string;
					categoryId: number;
					lexorank?: string | undefined;
				};
			};
			output: {
				id: number;
				lexorank: string;
				createdAt: string;
				updatedAt: string;
				title: string;
				description: string;
				url: string;
				iconUrl: string;
				categoryId: number;
			};
			outputFormat: "json";
			status: import("hono/utils/http-status").ContentfulStatusCode;
		};
	};
} & {
	"/links/:id": {
		$put: {
			input: {
				json: {
					lexorank: string;
					title: string;
					description: string;
					url: string;
					iconUrl: string;
					categoryId: number;
				};
			} & {
				param: {
					id: string;
				};
			};
			output: {
				id: number;
				lexorank: string;
				createdAt: string;
				updatedAt: string;
				title: string;
				description: string;
				url: string;
				iconUrl: string;
				categoryId: number;
			};
			outputFormat: "json";
			status: import("hono/utils/http-status").ContentfulStatusCode;
		};
	};
} & {
	"/links/:id": {
		$delete: {
			input: {
				param: {
					id: string;
				};
			};
			output: {
				id: number;
				lexorank: string;
				createdAt: string;
				updatedAt: string;
				title: string;
				description: string;
				url: string;
				iconUrl: string;
				categoryId: number;
			};
			outputFormat: "json";
			status: import("hono/utils/http-status").ContentfulStatusCode;
		};
	};
}, "/api/admin"> | import("hono/types").MergeSchemaPath<{
	"/links": {
		$get: {
			input: {};
			output: {
				links: {
					id: number;
					title: string;
					description: string;
					url: string;
					iconUrl: string;
				}[];
				id: number;
				name: string;
				lexorank: string;
				createdAt: string;
				updatedAt: string;
			}[];
			outputFormat: "json";
			status: import("hono/utils/http-status").ContentfulStatusCode;
		};
	};
}, "/api/public"> | import("hono/types").MergeSchemaPath<{
	"/user": {
		$get: {
			input: {};
			output: {
				isAdmin: boolean;
				sub: string;
				name: string;
				picture: string;
				givenName: string;
				familyName: string;
				exp: number;
			};
			outputFormat: "json";
			status: import("hono/utils/http-status").ContentfulStatusCode;
		};
	};
} & {
	"/links": {
		$get: {
			input: {};
			output: {
				links: {
					id: number;
					title: string;
					description: string;
					url: string;
					iconUrl: string;
				}[];
				id: number;
				name: string;
				lexorank: string;
				createdAt: string;
				updatedAt: string;
			}[];
			outputFormat: "json";
			status: import("hono/utils/http-status").ContentfulStatusCode;
		};
	};
}, "/api/private">) & {
	"/auth": {
		$post: {
			input: {
				json: {
					idToken: string;
				};
			};
			output: {
				error: string;
			};
			outputFormat: "json";
			status: 400;
		} | {
			input: {
				json: {
					idToken: string;
				};
			};
			output: {
				success: boolean;
			};
			outputFormat: "json";
			status: import("hono/utils/http-status").ContentfulStatusCode;
		};
	};
}) & {
	"/": {
		$get: {
			input: {};
			output: undefined;
			outputFormat: "redirect";
			status: 302;
		};
	};
}, "/">;
export type AppType = typeof app;

export {};
