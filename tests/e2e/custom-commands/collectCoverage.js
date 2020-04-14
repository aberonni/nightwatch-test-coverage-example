/**
 * Grabs coverage data from the page and returns it in the callback
 *
 * Example usage:
 *   browser.collectCoverage(function(coverageData) {
 *     // add to coverage report
 *   });
 *
 * @param {function} callback
 */
exports.command = function command (callback) {
  return this.execute(
    function () { return window.__coverage__ },
    [],
    function (result) {
      if (result.status !== 0 || !result.value) {
        console.log(result);
        throw new Error('Unable to collect coverage information');
      }
      callback(result.value);
    }
  )
}
