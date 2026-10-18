# 🏠 RentNest — Rental Property Marketplace

> A modern rental property platform designed to make property discovery, listing management, and rental requests easier for tenants and landlords.

## 📖 About The Project

**RentNest** is a rental property marketplace frontend built to provide a smooth and user-friendly experience for people searching for rental properties and property owners managing their listings.

The platform is designed around three user roles:

- **Tenants:** Discover properties and manage rental requests.
- **Landlords:** Create, update, and manage property listings.
- **Administrators:** Manage users and oversee platform activities.

The goal is to simplify the rental process through an intuitive interface, responsive design, and organized property management workflows.

## ✨ Key Features

### 🏡 Property Discovery
- Browse available rental properties.
- Search and filter properties based on relevant criteria.
- View detailed property information.
- Explore property images, pricing, location, and amenities.

### 👤 Tenant Experience
- Register and log in to an account.
- Browse and view property details.
- Submit rental requests.
- Manage rental request history.
- Access tenant-related dashboard features.

### 🏢 Landlord Dashboard
- Create and manage property listings.
- Update property information and availability.
- View incoming rental requests.
- Manage tenant requests through the dashboard.

### 🛡️ Admin Dashboard
- Manage users and platform activities.
- Monitor property listings.
- Oversee rental-related operations.

### 📱 Responsive User Interface
- Responsive layouts for desktop, tablet, and mobile.
- Reusable UI components.
- Form validation and user feedback.
- Loading, error, and empty states where implemented.

## 🛠️ Tech Stack

Update this list to match the technologies used in your actual repository.

| Technology | Purpose |
|---|---|
| Next.js | React framework |
| React | User interface |
| TypeScript | Type safety |
| Tailwind CSS | Responsive styling |
| shadcn/ui | Reusable UI components |
| Lucide React | Icons |
| TanStack Query | Server-state management |
| Zustand | Client-state management |
| Axios | HTTP requests |
| React Hook Form | Form management |
| Zod | Data validation |

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Access to the required backend API

### 1. Clone the Repository

```bash
git clone https://github.com/sifat-arch/rentnest-frontend.git
cd rentnest-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_BACKEND_URL=your_backend_api_url
```

Add any other environment variables required by the application. Use the exact variable names expected by your source code, and never commit secrets to GitHub.

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
```

Run the production build:

```bash
npm start
```

## 📁 Project Structure

The following is a general example. Adjust it to reflect the actual repository structure.

```text
rentnest-frontend/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── hooks/
│   ├── store/
│   └── types/
├── .gitignore
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## 🔌 Backend Integration

RentNest can communicate with a backend API to support authentication, property listings, rental requests, and other marketplace functionality.

Configure the backend URL in `.env.local` and ensure the backend server is running and accessible.

## 🌱 Future Improvements

- Enhanced property search and filtering.
- Improved accessibility and responsive design.
- Better property discovery and user experience.
- Additional dashboard analytics.
- Performance and loading-state improvements.

## 👨‍💻 Author

**Sifat Ullah** — Full Stack Web Developer

- **GitHub:** [@sifat-arch](https://github.com/sifat-arch)
- **Email:** [sifatullah1004@gmail.com](mailto:sifatullah1004@gmail.com)
- **Portfolio:** [Visit Portfolio](https://cute-lokum-f5a354.netlify.app/)

---

Built with ❤️ by Sifat Ullah.
