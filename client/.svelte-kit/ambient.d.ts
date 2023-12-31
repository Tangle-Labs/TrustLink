
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const PORT: string;
	export const DB_HOST: string;
	export const DB_NAME: string;
	export const DB_PASSWORD: string;
	export const DB_PORT: string;
	export const DB_USERNAME: string;
	export const IDENTITY_PATH: string;
	export const IDENTITY_SECRET: string;
	export const PRIVATE_KEY_HEX: string;
	export const ISSUER_DID: string;
	export const ISSUER_KID: string;
	export const NVM_INC: string;
	export const MANPATH: string;
	export const npm_package_dependencies_twitter_api_sdk: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const ANDROID_HOME: string;
	export const npm_config_version_git_tag: string;
	export const npm_package_dependencies_axios: string;
	export const npm_package_devDependencies_typescript: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_package_devDependencies_vite: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_config_init_license: string;
	export const npm_config_email: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_dev: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const ZDOTDIR: string;
	export const TERM_SESSION_ID: string;
	export const npm_package_private: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const ZSH: string;
	export const npm_package_readmeFilename: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const npm_package_description: string;
	export const npm_package_license: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_tslib: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const npm_config_argv: string;
	export const _: string;
	export const npm_config_engine_strict: string;
	export const __CFBundleIdentifier: string;
	export const USER_ZDOTDIR: string;
	export const PWD: string;
	export const JAVA_HOME: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_event: string;
	export const npm_package_dependencies_vite_plugin_node_polyfills: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const ITERM_PROFILE: string;
	export const npm_package_dependencies__tanglelabs_oid4vc: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_package_scripts_build: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_bin_links: string;
	export const npm_config_wrap_output: string;
	export const npm_package_main: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const VSCODE_INJECTION: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const HOME: string;
	export const SHLVL: string;
	export const COLORFGBG: string;
	export const npm_package_type: string;
	export const GOROOT: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const LC_TERMINAL_VERSION: string;
	export const npm_package_scripts_dev_server: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_version_git_message: string;
	export const npm_package_dependencies_nanoid: string;
	export const npm_package_dependencies__types_qrcode: string;
	export const ITERM_SESSION_ID: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_scripts_dev_client: string;
	export const npm_lifecycle_script: string;
	export const LC_CTYPE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const GOPATH: string;
	export const NVM_BIN: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_package_dependencies__sveltejs_adapter_static: string;
	export const LC_TERMINAL: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const SQLITE_EXEMPT_PATH_FROM_VNODE_GUARDS: string;
	export const npm_package_workspaces_0: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const npm_package_workspaces_1: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_config_prefix: string;
	export const npm_package_dependencies_qrcode: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_TWITTER_CLIENT_ID: string;
	export const PUBLIC_URI: string;
	export const PUBLIC_BASE_URI: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		PORT: string;
		DB_HOST: string;
		DB_NAME: string;
		DB_PASSWORD: string;
		DB_PORT: string;
		DB_USERNAME: string;
		IDENTITY_PATH: string;
		IDENTITY_SECRET: string;
		PRIVATE_KEY_HEX: string;
		ISSUER_DID: string;
		ISSUER_KID: string;
		NVM_INC: string;
		MANPATH: string;
		npm_package_dependencies_twitter_api_sdk: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		ANDROID_HOME: string;
		npm_config_version_git_tag: string;
		npm_package_dependencies_axios: string;
		npm_package_devDependencies_typescript: string;
		SHELL: string;
		TERM: string;
		npm_package_devDependencies_vite: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		npm_config_init_license: string;
		npm_config_email: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_dev: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		ZDOTDIR: string;
		TERM_SESSION_ID: string;
		npm_package_private: string;
		npm_config_registry: string;
		npm_package_devDependencies__sveltejs_kit: string;
		ZSH: string;
		npm_package_readmeFilename: string;
		USER: string;
		NVM_DIR: string;
		npm_package_description: string;
		npm_package_license: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		npm_package_devDependencies_tslib: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		LSCOLORS: string;
		PATH: string;
		npm_config_argv: string;
		_: string;
		npm_config_engine_strict: string;
		__CFBundleIdentifier: string;
		USER_ZDOTDIR: string;
		PWD: string;
		JAVA_HOME: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_event: string;
		npm_package_dependencies_vite_plugin_node_polyfills: string;
		LANG: string;
		npm_package_name: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		ITERM_PROFILE: string;
		npm_package_dependencies__tanglelabs_oid4vc: string;
		npm_config_version_commit_hooks: string;
		npm_package_scripts_build: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_bin_links: string;
		npm_config_wrap_output: string;
		npm_package_main: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		VSCODE_INJECTION: string;
		npm_package_devDependencies_svelte_check: string;
		HOME: string;
		SHLVL: string;
		COLORFGBG: string;
		npm_package_type: string;
		GOROOT: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		LC_TERMINAL_VERSION: string;
		npm_package_scripts_dev_server: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		HOMEBREW_PREFIX: string;
		npm_config_version_git_message: string;
		npm_package_dependencies_nanoid: string;
		npm_package_dependencies__types_qrcode: string;
		ITERM_SESSION_ID: string;
		LOGNAME: string;
		LESS: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_scripts_dev_client: string;
		npm_lifecycle_script: string;
		LC_CTYPE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		GOPATH: string;
		NVM_BIN: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_package_dependencies__sveltejs_adapter_static: string;
		LC_TERMINAL: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		SQLITE_EXEMPT_PATH_FROM_VNODE_GUARDS: string;
		npm_package_workspaces_0: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		npm_node_execpath: string;
		npm_package_workspaces_1: string;
		npm_config_version_tag_prefix: string;
		npm_config_prefix: string;
		npm_package_dependencies_qrcode: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_TWITTER_CLIENT_ID: string;
		PUBLIC_URI: string;
		PUBLIC_BASE_URI: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
