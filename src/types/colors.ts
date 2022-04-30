export const COLORS = [
	undefined,
	'primary',
	'secondary',
	'blue',
	'azure',
	'indigo',
	'purple',
	'pink',
	'red',
	'orange',
	'yellow',
	'lime',
	'green',
	'teal',
	'cyan',
	'success',
	'danger',
	'warning',
	'info',
	'light',
	'dark',
] as const

export type Colors = typeof COLORS[number]
