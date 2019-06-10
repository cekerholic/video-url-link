var _ = require('lodash');

exports.getReqOpt = (options) => {
    let defaultOptions = {
        gzip: true,
        method: 'GET',
        timeout: 5000,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
        },
        jar: true
    };
    return _.extend(defaultOptions, options);
}
