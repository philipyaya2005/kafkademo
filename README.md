# kafka-demo
a node js repo to demo basic kafka consumer producer

## How to build this project

1. bring up kafka and zookeeper
```bash
docker-compose up
```


2. npm install kafkajs
```
npm install kafkajs
```

3. run kafka node js
```
node create_topic.js

node consumer.js
```


4. publish
```bash
// if first letter < n|N it will go to partition 0 otherwise partition 1
node publisher.js <your message> 
```

![kafka_consumer_group](https://user-images.githubusercontent.com/11352799/141712673-dae9a996-2e32-4806-a3b0-434d7ed4cd93.JPG)

![kafka_distributed_system](https://user-images.githubusercontent.com/11352799/141712681-6ce9fb2c-fdc0-422f-b0b6-e35cdea89bd6.JPG)
