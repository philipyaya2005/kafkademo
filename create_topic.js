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

        const topics = await admin.listTopics();
        if(topics.includes("Users")) {
            console.log("Removing topic Users");
            await admin.deleteTopics({topics: ["Users"], timeout: 10});
            console.log("Removed topic Users");
        }
        
        await admin.createTopics({
            "topics": [
                {
                    "topic": "Users",
                    "numPartitions": 2
                }
            ]
        });

        console.log("Created kafka topics successfully!");
        await admin.disconnect();
    } catch(ex) {
        console.error(`Exception caught ${ex}`);
    } finally {
        process.exit(0)
    }
}
