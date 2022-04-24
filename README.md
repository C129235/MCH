# Introduction 
With the information given and additional assumptions of yours, you should develop an API for CHECKOUTs using
the Java framework of your choice (ideally use Spring Boot).
The main goal of the test it's to simulate a tyipical checkout operation in an ecommerce solution
Checkout sevice will receive Orders in a REST Endpoint. When checkout service is invoked, 2 operations will be
triggered:
- Bill the sum of all products to user in Bill service
- Call Logistic service to create a sent order

# Build and Test
1. Requirements 
- Docker & docker-compose instalation
- Nodejs installation
- Npm installation

2. Buid and run services with docker-compose
Execute: docker-compose up -d

- Docker-compose will deploy OrdersAPI, BillAPI and LogisticAPI in a network named app-network.
- .env file has the configuration names for OrdersAPI (included in git for testing purposes).
- Only OrdersAPI have exposed the port 3000, BillAPI and LogisticAPI are not accessible from the outside.
- OrdersAPI can access BillAPI and LogisticAPI by name.

3. Test 
User Swagger to test OrdersAPI, a valid example has been provided.
OrdersApi: http://localhost:3000/swagger

Use OrdersApi to send a checkout

# Frameworks and libraries
- express: Framefork for developing webs and API
- morgan: HTTP request logger middleware for nodejs
- swagger-autogen: Swagger automatic generator
- swagger-ui-express: Swagger library to expose OpenApi definition
- nodemon (only dev): Development tool for restarting application when file changes
- axios: Promise based HTTP client for the browser and node.js
- docker-compose: Build and deploy services in docker



