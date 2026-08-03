# API Integration

## Project
RentNest Frontend

**Backend API**
https://rentnest-theta.vercel.app

---

## Authentication

| Frontend Feature | Method | Backend Endpoint |
|------------------|--------|------------------|
| Register | POST | /api/auth/register |
| Login | POST | /api/auth/login |
| Get Profile | GET | /api/auth/me |

---

## Properties

| Frontend Feature | Method | Backend Endpoint |
|------------------|--------|------------------|
| Get All Properties | GET | /api/property |
| Property Details | GET | /api/property/:id |
| Create Property | POST | /api/property |
| Update Property | PATCH | /api/property/:id |
| Delete Property | DELETE | /api/property/:id |

---

## Categories

| Frontend Feature | Method | Backend Endpoint |
|------------------|--------|------------------|
| Get Categories | GET | /api/category |
| Create Category | POST | /api/category |
| Update Category | PATCH | /api/category/:id |
| Delete Category | DELETE | /api/category/:id |

---

## Bookings

| Frontend Feature | Method | Backend Endpoint |
|------------------|--------|------------------|
| Create Booking | POST | /api/booking |
| Get Tenant Bookings | GET | /api/booking |
| Get Landlord Bookings | GET | /api/booking/landlord |
| Update Booking Status | PATCH | /api/booking/:id |

---

## Reviews

| Frontend Feature | Method | Backend Endpoint |
|------------------|--------|------------------|
| Create Review | POST | /api/reviews |
| Get Property Reviews | GET | /api/reviews/:propertyId |

---

## Users (Admin)

| Frontend Feature | Method | Backend Endpoint |
|------------------|--------|------------------|
| Get All Users | GET | /api/user |
| Update User Role | PATCH | /api/user/:id |
| Change User Status | PATCH | /api/user/status/:id |

---

## Payments

| Frontend Feature | Method | Backend Endpoint |
|------------------|--------|------------------|
| Create Checkout Session | POST | /api/payment/create-checkout-session |
| Stripe Webhook | POST | /api/payment/webhook |
| Payment Success | GET | /payment/success |
| Payment Cancel | GET | /payment/cancel |

---

## Notes

- All protected endpoints require JWT authentication via HTTP-only cookies.
- The frontend uses Next.js Server Actions for API communication.
- Role-based access is enforced through Next.js Middleware.
- Data fetching uses Next.js App Router with caching and revalidation where appropriate.