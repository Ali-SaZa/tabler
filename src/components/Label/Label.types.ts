import type { ElProps } from '$lib/components'

export interface LabelProps extends Partial<ElProps> {
	/**
	 * Show a required indicator *
	 */
	required?: boolean
}
