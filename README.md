# Introduction 
With the information given and additional assumptions of yours, you should develop an API for CHECKOUTs using
the Java framework of your choice (ideally use Spring Boot).
The main goal of the test it's to simulate a tyipical checkout operation in an ecommerce solution
Checkout sevice will receive Orders in a REST Endpoint. When checkout service is invoked, 2 operations will be
triggered:
- Bill the sum of all products to user in Bill service
- Call Logistic service to create a sent order

# Build and Test
1. In OrdersAPI folder:
docker build . -t orders-api
2. In BillAPI folder:
docker build . -t bill-api
3. In LogisticAPI folder:
docker build . -t logistic-api

# Run solution
docker run -d -p 3000:3000 orders-api
docker run -d -p 4000:4000 bill-api
docker run -d -p 5000:5000 logistic-api

# Test Solution
Every service has a Swagger definition in /swagger route
OrdersApi: http://localhost:3000/swagger
BillApi: http://localhost:4000/swagger
LogisticApi: http://localhost:5000/swagger

Use OrdersApi to send a checkout

# Frameworks and libraries
- express: Framefork for developing webs and API
- morgan: HTTP request logger middleware for nodejs
- swagger-autogen: Swagger automatic generator
- swagger-ui-express: Swagger library to expose OpenApi definition
- nodemon (only dev): Development tool for restarting application when file changes
- axios: Promise based HTTP client for the browser and node.js



