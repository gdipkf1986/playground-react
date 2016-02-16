/**
 * Created by jovi on 12/13/15.
 */
let defaultCmp = function(a, b) {
    if (a == b) {
      return 0;
    }
    return a < b ? -1 : 1;
  };
let getCmpFunc = function(primer, reverse) {
    let dfc = defaultCmp, // closer in scope
      cmp = defaultCmp;
    if (primer) {
      cmp = function(a, b) {
        return dfc(primer(a), primer(b));
      };
    }
    if (reverse) {
      return function(a, b) {
        return -1 * cmp(a, b);
      };
    }
    return cmp;
  };

export default function() {
  let fields = [];
  let nFields = arguments.length;
  let field;
  let name;
  let reverse;
  let cmp;

  // preprocess sorting options
  for (let i = 0; i < nFields; i++) {
    field = arguments[i];
    if (typeof field === 'string') {
      name = field;
      cmp = defaultCmp;
    } else {
      name = field.name;
      cmp = getCmpFunc(field.primer, field.reverse);
    }
    fields.push({
      name: name,
      cmp: cmp
    });
  }

  // final comparison function
  return function(A, B) {
    let a;
    let b;
    let name;
    let result;
    for (let i = 0; i < nFields; i++) {
      result = 0;
      field = fields[i];
      name = field.name;

      result = field.cmp(A[name], B[name]);
      if (result !== 0) {
        break;
      }
    }
    return result;
  };
}
