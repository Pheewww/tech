"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
const kafka = new kafkajs_1.Kafka({
    clientId: "my-app",
    // where the kafka broker is running -- host and port
    brokers: ["localhost:9092"]
});
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "my-app3" });
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Producer is used to send messages to the kafka broker
        yield producer.connect();
        yield producer.send({
            topic: "quickstart-events",
            messages: [{
                    value: "hi there"
                }]
        });
        // connect to the consumer
        yield consumer.connect();
        yield consumer.subscribe({
            topic: "quickstart-events", fromBeginning: true // get all events from the beginning 
        });
        // what to do when a message is received
        yield consumer.run({
            eachMessage: (_a) => __awaiter(this, [_a], void 0, function* ({ topic, partition, message }) {
                var _b;
                console.log({
                    partition: partition,
                    offset: message.offset,
                    value: (_b = message === null || message === void 0 ? void 0 : message.value) === null || _b === void 0 ? void 0 : _b.toString(),
                });
            }),
        });
    });
}
main();
