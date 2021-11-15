const {Kafka} = require("kafkajs");


const message = process.argv[2];

if(message) {
    run(message);
}

async function run(message) {
    try {
        const kafka = new Kafka({
            "clientId": "testApp",
            "brokers": ["localhost:9092"]
        });
        
        const producer = kafka.producer();
        console.log("producer connecting");
        await producer.connect();
        console.log("producer connected");
        
        const partition = (message[0].toLowerCase() < "n") ? 0 : 1;
        const kafkainfo = {
            "topic": "Users",
            "messages": [
                {
                    "value": message,
                    "partition": partition
                }
            ]
        };

        await producer.send(kafkainfo)

        console.log(`Published message [${JSON.stringify(kafkainfo)}] successfully!`);
        await producer.disconnect();
    } catch(ex) {
        console.error(`Exception caught ${ex}`);
    } finally {
        process.exit(0)
    }
}
