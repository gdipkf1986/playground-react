/**
 * Created by jovi on 12/13/15.
 */
let default_cmp = function (a, b) {
    if (a == b) {
      return 0;
    }
    return a < b ? -1 : 1;
  },
  getCmpFunc = function (primer, reverse) {
    let dfc = default_cmp, // closer in scope
      cmp = default_cmp;
    if (primer) {
      cmp = function (a, b) {
        return dfc(primer(a), primer(b));
      };
    }
    if (reverse) {
      return function (a, b) {
        return -1 * cmp(a, b);
      };
    }
    return cmp;
  };

export default function () {
  let fields = [],
    n_fields = arguments.length,
    field, name, reverse, cmp;

  // preprocess sorting options
  for (let i = 0; i < n_fields; i++) {
    field = arguments[i];
    if (typeof field === 'string') {
      name = field;
      cmp = default_cmp;
    }
    else {
      name = field.name;
      cmp = getCmpFunc(field.primer, field.reverse);
    }
    fields.push({
      name: name,
      cmp: cmp
    });
  }

  // final comparison function
  return function (A, B) {
    let a, b, name, result;
    for (let i = 0; i < n_fields; i++) {
      result = 0;
      field = fields[i];
      name = field.name;

      result = field.cmp(A[name], B[name]);
      if (result !== 0) {
        break;
      }
    }
    return result;
  }
}