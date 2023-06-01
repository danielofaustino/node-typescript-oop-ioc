# TypeScript Project with Node.js, Express, OOP, and IoC

This is a sample TypeScript project using Node.js and Express, aiming to practice Object-Oriented Programming (OOP) and Inversion of Control (IoC) concepts. The project utilizes the [SWAPI](https://swapi.dev/api/starships) API to fetch starships' data.

## Installation

1. Clone the repository: `git clone https://github.com/danielofaustino/node-typescript-oop-ioc.git`
2. Navigate to the project directory: `cd node-typescript-oop-ioc`
3. Install the dependencies: `npm install`

## Configuration

Before running the project, you need to provide the base URL for the SWAPI API. Create a `.env` file at the project root and add the following line:

```
SWAPI_BASE_URL=https://swapi.dev/api/
SERVER_PORT=5005

```

## Running the Project

Execute the following command to start the server:

```bash
npm start
```

The server will be running at `http://localhost:5005`.

## Project Overview

The project structure is as follows:

```
├── src
│   ├── controllers
│   │   └── StarWarsController.ts
│   ├── routes
│   │   └── starships.ts
│   ├── services
│   │   └── StarwarsService.ts
│   ├── app.ts
│   ├── config.ts
│   └── server.ts
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

- The `controllers` folder contains the API controllers responsible for handling HTTP requests and calling the corresponding services.
- The `routes` folder contains the API route definitions.
- The `services` folder contains the business logic of the application, with the `StarwarsService` coordinating the calls to the SWAPI API.
- The `app.ts` file configures the Express application and defines the API routes.
- The `server.ts` file starts the Express server.
- The `.env.example` file contains the environment variables examples, such as the SWAPI API base URL.
- The `.gitignore` file specifies the files and folders to be ignored by version control.
- The `tsconfig.json` file is the TypeScript configuration file.

## Applied Concepts

This project applies the following concepts:

- **Object-Oriented Programming (OOP)**: The domain entities are modeled as classes, following the principles of OOP, such as encapsulation, inheritance, and polymorphism.
- **Inversion of Control (IoC)**: Inversion of control is applied to reduce coupling between classes and facilitate testability. Dependencies are injected into the constructors of classes instead of being instantiated directly.

## Contribution

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).