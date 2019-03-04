const util = {};

util.SuccessResponse = (data) => {
    return {message: 'SUCCESS', data: data};
};

module.exports = util;