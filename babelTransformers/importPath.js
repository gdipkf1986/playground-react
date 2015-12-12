/**
 * Created by jovi on 12/12/15.
 */
var startsWith = require('lodash/string/startsWith');
var CWD_PREFIX = '~';


module.exports = function (babel) {
  // get the working directory

  var cwd = process.cwd();

  return new babel.Transformer("babel-plugin-import-path", {
    ImportDeclaration: function (node, parent) {

      // probably always true, but let's be safe
      if (!babel.types.isLiteral(node.source)) {
        return node;
      }

      var ref = node.source.value;

      if (startsWith(node.source.value, CWD_PREFIX)) {
        node.source.value = cwd + '/js' + node.source.value.slice(CWD_PREFIX.length);
        return node;
      }
      return node;
    }
  });
};
