import Kafka from 'kafka-node';
import * as config from '../config';

const Producer = Kafka.Producer;
const client = new Kafka.KafkaClient({ kafkaHost: config.KafkaHost });
const producer = new Producer(client, {
    requireAcks: 0,
    partitionerType: 2
});

const pushDataToKafka = (dataToPush) => {
  try {
      let payloadToKafkaTopic = [
          {
              topic: config.KafkaTopic,
              messages: JSON.stringify(dataToPush),
          }
      ];

      console.log(payloadToKafkaTopic);

      producer.on('ready', async () => {
         producer.send(payloadToKafkaTopic, (err, data) => {
             console.log('data: ', data);
         });

          producer.on('error', (err) => {
              console.error("Oops, something wrong happened:");
              console.error(err);
          });
      });

  } catch (e) {
      console.error(e);
  }
};