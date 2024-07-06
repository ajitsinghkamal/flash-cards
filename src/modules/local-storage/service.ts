import { USER_NAME_KEY, USER_THEME_KEY } from "./key";

export function isLocalStorageAvailable() {
	return typeof localStorage !== "undefined";
}

export function save(
	id: typeof USER_NAME_KEY | typeof USER_THEME_KEY,
	value: string,
) {
	if (isLocalStorageAvailable()) {
		window.localStorage.setItem(id, value);
	}
}

export function get(
	id: typeof USER_NAME_KEY | typeof USER_THEME_KEY,
): string | null {
	return isLocalStorageAvailable() ? window.localStorage.getItem(id) : null;
}

export function saveUserName(value: string) {
	save(USER_NAME_KEY, value);
}

export function getUserName(value: string): string | null {
	return get(USER_NAME_KEY);
}

export function saveUserTheme(value: string) {
	save(USER_THEME_KEY, value);
}

export function getUserTheme(value: string): string | null {
	return get(USER_THEME_KEY);
}
