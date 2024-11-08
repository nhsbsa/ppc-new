module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {};

  //
  // ALTER DATE BY NUMBER OF MONTHS FUNCTION
  //
  filters.alterTodaysDateByNumberOfMonths = function( monthOffset ){

    const months = ['January','February', 'March','April','May','June','July','August','September','October','November','December'];

    const today = new Date();
    const d = today.getDate();
    today.setMonth(today.getMonth() + monthOffset);
    if (today.getDate() !== d) {
      today.setDate(0);
    }

    return [ today.getDate(), months[today.getMonth()], today.getFullYear()].join(' ');

  };

  //
  // ALTER DATE BY NUMBER OF DAYS FUNCTION
  //
  filters.alterTodaysDateByNumberOfDays = function( dayOffset ){

    let today = new Date();
    today.setDate(today.getDate() + dayOffset);

    // Manually format the date to avoid leading zeros (day, month, year)
    return [ today.getDate(), today.getMonth() + 1, today.getFullYear()].join(' '); 

  };

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
