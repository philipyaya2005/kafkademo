# kafkademo
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
