var url = 'http://mylooger.io/log';

function log(message){
    console.log(message);
}

module.exports.log = log;
module.exports.end_Point = url;