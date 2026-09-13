# Gym

A modern full-stack Gym & Fitness platform built with **Django REST Framework** and **React + Vite**.

## 🚀 Features
- **Modern Responsive Design**: Built with React, Vite, and Bootstrap with sleek dark-themed aesthetics.
- **Dynamic Programs & Classes**: Filterable workout routines (Strength, HIIT, Yoga, Cardio, etc.) powered by Django REST APIs.
- **Trainer Profiles & Booking**: Dedicated trainer profiles with real-time consultation booking system.
- **Membership Management**: Tiered membership packages (Silver, Gold, Platinum).
- **Fitness Calculators**: BMI and Calorie intake calculators.
- **Testimonials & Gallery**: Interactive photo gallery with member transformations and reviews.

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite, Axios, Bootstrap 5
- **Backend**: Python, Django 5, Django REST Framework, Django CORS Headers, SimpleJWT
- **Database**: SQLite3

## 💻 Getting Started

### 1. Backend Setup (Django)
```bash
# Activate virtual environment
.\venv\Scripts\activate

# Navigate to backend
cd backend

# Run migrations
python manage.py migrate

# Seed database with sample data
python seed.py

# Start Django backend server
python manage.py runserver 127.0.0.1:8000
```

### 2. Frontend Setup (React + Vite)
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to explore the website.
