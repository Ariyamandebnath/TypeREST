# Node.js + TypeScript + Zod + Docker

This is a CRUD (Create, Read, Update, Delete) application built using Node.js, TypeScript, and MongoDB. It provides a RESTful API for managing resources and serves as a structured approach for building TypeScript + Node.js applications.

## Features

- **CRUD Operations:** Supports all CRUD operations for managing resources.
- **RESTful API:** Provides a RESTful API for interacting with the application.
- **TypeScript:** Written in TypeScript for improved code maintainability and scalability.
- **Zod:** Utilizes Zod for schema validation, ensuring data integrity and security.
- **MongoDB:** Utilizes MongoDB as the database for storing and retrieving data.
- **Dockerized:** Containerized using Docker for easy deployment and scalability.
## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js and npm:** [Install Node.js and npm](https://nodejs.org/)
- **Docker:** [Install Docker](https://docs.docker.com/get-docker/)
- **MongoDB:** [Install MongoDB](https://docs.mongodb.com/manual/installation/)



## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/nodejs-typescript-zod-mongodb-crud.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd nodejs-typescript-zod-mongodb-crud
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start MongoDB:**

    If MongoDB is not already running, start it using the following command:

    ```bash
    docker run -d -p 27017:27017 --name mongodb mongo
    ```

5. **Build and run the application:**

    ```bash
    npm run build
    npm start
    ```

6. **Access the API:**

    The API is now running and can be accessed at [http://localhost:PORT](http://localhost:). You can use tools like Postman or cURL to interact with the endpoints.


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## API Endpoints
all Api - endpoints are mentioned in the postman-collection.json

## Development

- **Running in Development Mode:**

    ```bash
    npm run dev
    ```


## Docker

- **Build Docker Image:**

    ```bash
    docker build -t nodejs-app .
    ```

- **Run Docker Container:**

    ```bash
    docker run -d -p <machine_port>:<docker_port> --name nodejs-app nodejs-app
    ```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

