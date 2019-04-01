function config(options) {
  options = options || {};
  return {
    port: process.env.PORT || 38380,
    apiUrl:
      options.apiUrl ||
      'http://ec2-52-78-48-27.ap-northeast-2.compute.amazonaws.com:38380'
  };
}

module.exports = config();
