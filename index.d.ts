type Replacer = (substring: string, ...args: any[]) => string | Promise<string>

type AsyncReplace = (str: string, regexp: RegExp, replacer: Replacer) => Promise<string>

declare const asyncReplace: AsyncReplace

export = asyncReplace
