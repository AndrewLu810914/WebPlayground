# Deploy MongoDb in docker

Use following commands:

```sh
// pull mongo image
docker pull mongo

// run mongo
docker run -d --name mongodb -p 27017:27017 mongo

// check running status
docker ps
```

Connection string will be

```txt
mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true
```
