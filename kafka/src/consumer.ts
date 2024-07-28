import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"]
})

// partition and consumer groups - kafka will load balance between consumers of the SAME group and only curretn will get updates - with different groups, each consumer will get all the messages, but in same group, only one consumer will get the message
// ADV - fault tolerance - if one consumer goes down, another consumer will take over 
// answer - partitions(sub-div in topics) -> PARRALLELISM - multiple consumers can work on the same topic
const consumer = kafka.consumer({ groupId: "my-app3" });


async function main() {
  await consumer.connect();
  await consumer.subscribe({
    topic: "quickstart-events", fromBeginning: true
  })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        offset: message.offset,
        value: message?.value?.toString(),
      })
    },
  })
}


main();