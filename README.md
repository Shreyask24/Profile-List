# 🌍 Profile Viewer App with Map Integration

This is a React-based profile management app that allows users to:

- Add, edit, and delete profiles (Admin Dashboard)
- View profiles and their locations on an interactive map
- Search and filter profiles by name or location
- Navigate to individual profile detail pages

Built with **React**, **Redux Toolkit**, **Formik**, **Leaflet**, and **Tailwind CSS**.

---

## 🚀 Features

### 🧑 Profile Management (Admin Dashboard)
- Add a new profile with details (name, photo, address, coordinates)
- Edit or delete existing profiles
- All data is stored in **Redux state**

### 🗺️ Interactive Map
- View a selected profile’s location on a Leaflet map
- Marker shows name and address

### 🔍 Search and Filter
- Search by name
- Filter by location/address
- Instant filtering using controlled input fields

### 🧭 Navigation
- Click “Details” to navigate to a profile-specific page using **React Router**

---

## 🛠️ Tech Stack

| Technology       | Description                           |
|------------------|---------------------------------------|
| React            | Frontend UI framework                 |
| Redux Toolkit    | State management                      |
| Formik           | Form handling for Admin dashboard     |
| Leaflet & React-Leaflet | Map and location rendering    |
| Tailwind CSS     | Utility-first CSS framework           |
| React Router     | Client-side routing                   |

---

## 📦 Installation

```bash
git clone https://github.com/your-username/profile-map-viewer.git
cd profile-map-viewer
npm install
npm start
