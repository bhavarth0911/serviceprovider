# 🛠️ Service Provider Platform

A scalable, role-based service provider platform that connects customers with service providers across various domains such as plumbing, electrical, tutoring, etc. Built using Angular for the frontend, Spring Boot for the backend, and MySQL for data management.

---

## 🔧 Features

### 🔐 User Authentication & Authorization
- JWT-based authentication
- Role-based access control (Customer, Provider, Admin)
- Secure login system

### 🧭 Service Discovery & Management
- Search and filter services by type, location, ratings, and availability
- View detailed service provider profiles
- Admin-controlled service listing approval

### 📅 Booking & Scheduling
- Real-time availability via calendar integration
- Seamless service booking flow with confirmation/reminder emails

### 🌟 Ratings & Reviews
- Post-service customer feedback
- Admin moderation for reviews

### 📊 Admin Dashboard
- Manage users and providers
- Monitor platform analytics (bookings, engagement, etc.)
- Handle disputes and support tickets

### 📱 User Interfaces
- **Customer Panel**: Browse services, book providers, submit reviews
- **Provider Panel**: Manage profile, availability, and bookings
- **Admin Panel**: Oversee platform operations, analytics, and user management

---

## 🧰 Tech Stack

| Layer          | Technology               |
|----------------|---------------------------|
| Frontend       | Angular, PrimeNG          |
| Backend        | Spring Boot (REST APIs)   |
| Database       | MySQL                     |
| Authentication | JWT                       |
| Notifications  | Email (optional setup)|

---

## 📈 Advanced Capabilities (Optional Enhancements)
- Real-time chat between customer and provider
- Geo-location for provider discovery
- Dynamic pricing based on time slots or demand
- Subscription-based premium services

---

## 🗂️ Database Schema Overview

- **Users** – stores user info, roles, credentials
- **Service Providers** – provider profiles and availability
- **Services** – categories and service descriptions
- **Bookings** – records of service appointments
- **Reviews** – feedback and ratings from customers

---

## 🚀 Getting Started

### Prerequisites
- Node.js and Angular CLI (for frontend)
- Java 21+ and Maven (for backend)
- MySQL Server


