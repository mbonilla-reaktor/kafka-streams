'use strict';

var _kafkaNode = require('kafka-node');

var _kafkaNode2 = _interopRequireDefault(_kafkaNode);

var _config = require('../config');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _kafkaNode2.default.KafkaClient({
    kafkaHost: config.KafkaHost
});

var topicToCreate = [{
    topic: config.KafkaTopic,
    partitions: 1,
    replicationFactor: 1
}];

client.createTopics(topicToCreate, function (error, result) {
    console.log(result, 'topic created successfully');
});