# 🗺️ Natours API

A RESTful API for a tour booking platform built with Node.js, Express, and MongoDB.  
This project was created as part of _Jonas Schmedtmann's Node.js Bootcamp_

---

## 🚀 Features

- Fully-featured REST API with filtering, sorting, pagination
- User authentication and authorization (JWT, roles)
- Tour CRUD operations (create, update, delete)
- Tour geolocation and search by distance
- Secure password management with bcrypt and JWT
- File uploads for user photos and tour images
- Rate limiting, data sanitization, and other security best practices
- MongoDB aggregation pipelines (e.g. tour stats)
- Stripe integration for payments (premium section)

---

## 🧱 Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** for authentication
- **Multer** for file uploads
- **Stripe API** (for checkout session)
- **MongoDB Atlas** (for hosted DB)
- **Postman** for API testing

---

## 🔐 API Authentication

Some endpoints are protected.  
You must log in to receive a token and access restricted routes.
