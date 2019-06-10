var _ = require('lodash');

exports.getReqOpt = (options) => {
    let defaultOptions = {
        gzip: true,
        method: 'GET',
        timeout: 5000,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:66.0) Gecko/20100101 Firefox/66.0'
        },
        jar: true
    };
    return _.extend(defaultOptions, options);
}
