/**
 * Describe Bojantest here.
 *
 * The exported method is the entry point for your code when the function is invoked. 
 *
 * Following parameters are pre-configured and provided to your function on execution: 
 * @param event: represents the data associated with the occurrence of an event, and  
 *                 supporting metadata about the source of that occurrence.
 * @param context: represents the connection to Functions and your Salesforce org.
 * @param logger: logging handler used to capture application logs and trace specifically
 *                 to a given execution of a function.
 */

var isEvenG = require('is-even');
 
 module.exports = async function (event, context, logger) {
    var isEven = require('is-even');
    logger.info(`Invoking Bojantest with payload ${JSON.stringify(event.data || {})}`);

    const results = await context.org.dataApi.query('SELECT Id, Name FROM Account');

    logger.info(JSON.stringify(results));

    logger.info('1 is even : ' + isEven(1));
    logger.info('1 is even : ' + isEven(2));
    logger.info('1 is even g: ' + isEvenG(1));
    logger.info('1 is even g: ' + isEvenG(1));

    return results;
}
