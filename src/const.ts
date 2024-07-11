export const body = document.querySelector("body");

export function objectLength(obj: Record<string, any>) {
	return Object.keys(obj).length;
}
