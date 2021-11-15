const {Kafka} = require("kafkajs");

startConsumer();

async function startConsumer(message) {
    try {
        const kafka = new Kafka({
            "clientId": "testApp",
            "brokers": ["localhost:9092"]
        });
        
        const consumer = kafka.consumer({
            groupId: "consumerGP1"
        });
        
        process.on('SIGINT', () => {consumer.disconnect();});

        console.log("consumer connecting");
        await consumer.connect();
        console.log("consumer connected");

        consumer.subscribe({
            "topic": "Users",
            "fromBeginning": true
        });

        await consumer.run({
            eachMessage: async result => {console.log(`Received message [${result.message.value}] partition [${result.partition}]`)}
        });
    } catch(ex) {
        console.error(`Exception caught ${ex}`);
    } finally {
        // do nothing
    }
}
