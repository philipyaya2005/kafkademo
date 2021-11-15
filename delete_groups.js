const {Kafka} = require("kafkajs");
// or 
// const Kafka = require("kafkajs").kafka;
run();

async function run() {
    try {
        const kafka = new Kafka({
            "clientId": "testApp",
            "brokers": ["localhost:9092"]
        });

        const admin = kafka.admin();
        console.log("Connnecting to Kafka...");
        await admin.connect();
        console.log("Connected to kafka!");

        await admin.deleteGroups(["consumerGP2", "consumerGP1"])

        console.log("Deleted groups successfully!");
        await admin.disconnect();
    } catch(ex) {
        console.error(`Exception caught ${ex}`);
    } finally {
        process.exit(0)
    }
}
