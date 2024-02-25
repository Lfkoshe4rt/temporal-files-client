export const truncateString = (name: string, maxLength: number, limit: number): string => {
	return name.length > maxLength ? name.slice(0, limit) + '...' : name
}
