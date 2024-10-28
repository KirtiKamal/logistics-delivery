# Logistics Management System Documentation

## Table of Contents
1. [﻿Introduction](https://#introduction) 
2. [﻿Getting Started](https://#getting-started) 
3. [﻿Technologies](https://#technologies) 
4. [﻿API Documentation](https://#api-documentation) 
    - [﻿Authentication](https://#authentication) 
    - [﻿Items Management](https://#items-management) 
    - [﻿Customers Management](https://#customers-management) 
    - [﻿Delivery Vehicles Management](https://#delivery-vehicles-management) 
    - [﻿Orders Management](https://#orders-management) 
5. [﻿Environment Variables](https://#environment-variables) 
6. [﻿Error Handling](https://#error-handling) 
7. [﻿Logging](https://#logging) 
8. [﻿ER Diagram Explanation](https://#er-diagram-explanation) 
## Introduction
The Logistics Management System is designed to manage delivery vehicles, items, orders, and customers for a logistics company. It provides a RESTful API supporting full CRUD operations across various management modules like items, customers, delivery vehicles, and orders. Authentication is managed via JWT.

## Getting Started
### Clone the Repository
```bash
git clone <﻿github.com/KirtiKamal/logistics-delivery>
```
### Install Dependencies
```bash
npm install
```
### Usage
#### Start the Backend Server
```bash
npm start
```
#### Start the Frontend Development Server
```bash
cd view
npm install
npm start
```
The backend server will run on `http://localhost:8080` and the frontend server will run on `http://localhost:3000`.

## Technologies
### Backend
- Node.js
- Express.js
- MongoDB
- Bcrypt.js
- JWT (JSON Web Tokens)
### Frontend
- React
- Redux
- Axios
- React Router
## API Documentation
### Authentication
- **POST** `/api/users/register` : Register a new user.
- **POST** `/api/users/login` : Log in and obtain a JWT token for authentication.
### Items Management
- **GET** `/api/items` : Retrieve a list of all items.
- **GET** `/api/items/:id` : Retrieve details of a specific item.
- **POST** `/api/items` : Create a new item.
- **PUT** `/api/items/:id` : Update an existing item.
- **DELETE** `/api/items/:id` : Delete an item.
### Customers Management
- **GET** `/api/customers` : Retrieve a list of all customers.
- **GET** `/api/customers/:id` : Retrieve details of a specific customer.
- **POST** `/api/customers` : Create a new customer.
- **PUT** `/api/customers/:id` : Update an existing customer.
- **DELETE** `/api/customers/:id` : Delete a customer.
### Delivery Vehicles Management
- **GET** `/api/delivery-vehicles` : Retrieve a list of all delivery vehicles.
- **GET** `/api/delivery-vehicles/:id` : Retrieve details of a specific delivery vehicle.
- **POST** `/api/delivery-vehicles` : Create a new delivery vehicle.
- **PUT** `/api/delivery-vehicles/:id` : Update an existing delivery vehicle.
- **DELETE** `/api/delivery-vehicles/:id` : Delete a delivery vehicle.
### Orders Management
- **GET** `/api/orders` : Retrieve a list of all orders.
- **GET** `/api/orders/:id` : Retrieve details of a specific order.
- **POST** `/api/orders` : Create a new order.
- **PUT** `/api/orders/:id` : Update an existing order.
- **DELETE** `/api/orders/:id` : Delete an order.
- **PUT** `/api/orders/:id/mark-delivered` : Mark an order as delivered.
## Environment Variables
Create a `.env` file in the backend project root directory and add the following:

- `MONGO_DB_URI` : MongoDB connection string.
- `PORT` : The port number for the backend server.
## Error Handling
The backend includes basic error handling. Errors are returned in JSON format with the following structure:

```json
{
  "error": "Error message",
  "status": 400
}
```
Appropriate HTTP status codes are sent for each type of error (e.g., 400 for bad requests, 401 for unauthorized access, 500 for internal server errors).

## Logging
HTTP requests are logged using morgan middleware. All logs are written to an `access.log` file.



## ER Diagram
![diagram-export-10-18-2024-11_24_02-AM.png](https://eraser.imgix.net/workspaces/I008U0zpvosRqrB2emOT/agmpxlsx89ReIMv87eJvrPYtDCq1/4Yr45UdgPo2BvNSNQlnOI.png?ixlib=js-3.7.0 "diagram-export-10-18-2024-11_24_02-AM.png")



## ER Diagram Explanation
This ER diagram depicts a logistics management system where users can manage orders, customers, items, and delivery vehicles. Here's a breakdown of each component and its relationships:

### Entities and Their Attributes
1. **Users**
    - `id` : The primary key (unique identifier) for each user.
    - `username` : The login name for the user.
    - `password` : The password for authenticating the user.
2. **Orders**
    - `id` : Primary key for each order.
    - `itemId` : A foreign key linking to the `items`  table.
    - `orderNumber` : A unique number automatically generated for each order.
    - `userId` : Foreign key linking to the `users`  table.
    - `customerId` : Foreign key linking to the `customers`  table.
    - `dropLocation` : The delivery location.
    - `deliveryStatus` : The current status of the delivery.
    - `vehicleId` : Foreign key linking to the `vehicles`  table.
3. **Customers**
    - `id` : The primary key for each customer.
    - `name` : The customer's name.
    - `contactInfo` : The contact details of the customer.
    - `address` : The address of the customer.
4. **Items**
    - `id` : The primary key for each item.
    - `name` : The name of the item.
    - `description` : A brief description of the item.
    - `price` : The cost of the item.
5. **Vehicles**
    - `id` : The primary key for each vehicle.
    - `licensePlate` : The license plate number of the vehicle.
    - `model` : The model of the delivery vehicle.
    - `capacity` : The capacity or load the vehicle can carry.
### Explanation of Workflow Based on the Diagram
- **User Registration/Login**: A user registers and logs in. The user's `id`  is stored in the `users`  table.
- **Creating Orders**: The user selects or adds new customers, items, and delivery vehicles to place an order.
- **Order Management**: Each order has a `deliveryStatus`  that tracks its progress.
### Key Points
- **Primary Keys (PK)**: Each entity has a unique identifier (`id` ).
- **Foreign Keys (FK)**: Foreign keys like `userId` , `customerId` , `itemId` , and `vehicleId`  link the orders table to the respective entities.
- **Relationships**: The diagram emphasizes the relationships between entities, ensuring that orders link correctly to customers, items, and vehicles, and

## GitHub Repository Link: [﻿github.com/KirtiKamal/logistics-delivery](https://github.com/KirtiKamal/logistics-delivery) 




