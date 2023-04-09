// Helper to refactor className
export const cn = (template: TemplateStringsArray, ...args: (string | boolean | undefined | number | null)[]) => {
	let res = ''

	for (let i = 0; i < template.length; i++) {
		res += `${template[ i ]}${args[ i ] || ''} `
	}
	return res.replace(/(\r\n|\n|\r|\s+)/gm, " ").trim()
}
// Usage cn`cls1 cl2 cls3 cls4`