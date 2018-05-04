// @ts-check
/**
 * Like String.prototype.replace but supports asynchronous replacer.
 * @param {string} str
 * @param {RegExp} re
 * @param {(substring: string, ...args: any[]) => string | Promise<string>} replacer
 * @returns {Promise<string>}
 */
module.exports = (str, re, replacer) => {
  return Promise.resolve().then(() => {
    const fns = []
    str.replace(re, (m, ...args) => {
      fns.push(replacer(m, ...args))
      return m
    })
    return Promise.all(fns).then(replacements => {
      return str.replace(re, () => replacements.shift())
    })
  })
}
