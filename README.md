# Access Wayfinder


Access Wayfinder is a cross-platform mobile application built with React Native and Expo that empowers users to discover, share, and rate accessibility information for local businesses and public spaces.

## Features

- **Map & Views**: visualize accessible locations on an interactive map or as a sortable list  
- **Filters** category (restaurants, shops, public buildings) and specific accessibility features  
- **User Contributions**: submit new places or update existing entries via RESTful API  
- **Ratings & Notes**: view and leave ratings, comments, and photos for each location  

## Tech Stack

- **Framework:** React Native & Expo
- **Navigation:** React Navigation  
- **State Management:** Context API 
- **Maps:** react-native-maps
- **Language:** JavaScript 
- **Backend:** RESTful API (Firebase)  

## Getting Started

### Prerequisites

- Node.js (>=14.x)  
- npm or yarn  
- Expo CLI (`npm install -g expo-cli`)

### Installation

```bash
# Clone repository
git clone https://github.com/krishavs1/access-wayfinder.git
cd access-wayfinder

# Install dependencies
npm install      # or yarn install

# Copy env example and configure
cp .env.example .env
# Set your API_BASE_URL and MAPS_API_KEY in .env

# Start the Expo development server
expo start
