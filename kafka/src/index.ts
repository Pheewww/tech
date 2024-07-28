import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  // where the kafka broker is running -- host and port
  brokers: ["localhost:9092"]
})

const producer = kafka.producer();

const consumer = kafka.consumer({groupId: "my-app3"});


async function main() {

    // Producer is used to send messages to the kafka broker
  await producer.connect();
  await producer.send({
    topic: "quickstart-events",
    messages: [{
      value: "hi there"
    }]
  })

  // connect to the consumer
  await consumer.connect();
  await consumer.subscribe({
    topic: "quickstart-events", fromBeginning: true // get all events from the beginning 
  })


  // what to do when a message is received
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition: partition,
        offset: message.offset,
        value: message?.value?.toString(),
      })
    },
  })
}


main();