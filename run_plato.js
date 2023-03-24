var plato = require('plato');
const requireJSON = require('json-easy-strip');

let src = ['plugins/nodebb-plugin-composer-anon/*.js', 'plugins/nodebb-plugin-composer-anon/static/lib/*.js', 'plugins/nodebb-plugin-composer-anon/static/lib/composer/*.js'];

let jshintRules = requireJSON('./plugins/nodebb-plugin-composer-anon/.jshintrc');
let eslintRules = requireJSON('./plugins/nodebb-plugin-composer-anon/static/lib/.eslintrc');

console.log("Using following rules for jshint/eslint:");
console.log(jshintRules);
console.log(eslintRules);


// Based on sample code from Plato GitHub
let options = {
    title: 'Plugin Code Report',
    jshint: jshintRules,
    eslint: eslintRules, //JSON.parse(eslintRules),
    exclude: /.json|plato_report*/
};

//you can use the reports in the callback.
function callback(reports) {
  let overview = plato.getOverviewReport(reports);

  let { total, average } = overview.summary;

  console.log(total);
  console.log(average);

  let output = `total
    ----------------------
    jshint: ${total.jshint}
    sloc: ${total.sloc}
    maintainability: ${total.maintainability}
average
    ----------------------
    jshint: ${average.jshint}
    sloc: ${average.sloc}
    maintainability: ${average.maintainability}`;

  if (total.maintainability == null || total.sloc == null || average.sloc == null || average.maintainability == null || total.jshint == null || average.jshint == null) {
    throw new Error("Plato encountered error (null)");
  } else if (total.maintainability == NaN || total.sloc == NaN || average.sloc == NaN || average.maintainability == NaN || total.jshint == NaN || average.jshint == NaN) {
    throw new Error("Plato encountered error (NaN)");
  } else if (total.maintainability / total.sloc < 0.333) {
    throw new Error("Total maintainability ratio not good enough");
  } else if (average.maintainability / average.sloc < 0.333) {
    throw new Error("Average maintainability ratio not good enough");
  } else if (total.jshint / total.sloc > 0.01) {
    throw new Error("More total possible errors than expected!");
  }
  
  console.log(output);
}

//usage is plato.inspect
console.log("Current directory:", __dirname);
plato.inspect(src, 'plugins/nodebb-plugin-composer-anon/plato_report', options, callback);
console.log("Successfully run!");
