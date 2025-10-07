# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `npm run dev` - Start Vite dev server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Architecture Overview

**Technology Stack:**
- React 19 + TypeScript + Vite
- React Router v7 for routing
- TanStack Query (React Query) for server state management
- Zustand for client state management (with persist middleware)
- Formik + Yup for form handling and validation
- Axios for API calls
- RSuite for UI components
- Tailwind CSS v4 for styling
- Framer Motion for animations

**Application Structure:**

The app follows a feature-based structure with centralized shared resources:

```
src/
├── api/           - Axios instance with interceptors
├── hooks/         - Custom hooks organized by domain (useUsers, useFloors)
├── pages/         - Page-level components
├── components/    - Shared UI components
├── routes/        - Router configuration with route guards
├── store/         - Zustand stores (userStore)
├── types/         - TypeScript types and enums
├── utils/         - Utility functions (handleApiError)
├── styles/        - Global CSS
├── animation/     - Animation components
└── assets/        - Static assets
```

**Key Architectural Patterns:**

1. **API Layer** ([src/api/api.ts](src/api/api.ts)):
   - Base URL: `http://localhost:4000`
   - Axios instance `captusApi` with automatic token injection
   - Request interceptor adds Bearer token from secure storage
   - Response interceptor handles 401/403 and clears storage on auth failure

2. **Authentication Flow**:
   - JWT tokens stored in react-secure-storage with keys `DRY` (access) and `KISS` (refresh)
   - User data persisted via Zustand with secure storage
   - Token expiry checked via `react-jwt` `isExpired()`
   - Protected routes use `IsRequired` HOC that checks token validity and redirects to "/" if expired
   - Token refresh interval: 2 hours

3. **Custom Hooks Pattern** ([src/hooks/](src/hooks/)):
   Each domain (useUsers, useFloors) follows this structure:
   - `request.ts` - Raw API calls using captusApi
   - `useHook.ts` - TanStack Query mutations/queries
   - `IReqX.ts` / `IResX.ts` - Request/response TypeScript interfaces

4. **State Management**:
   - Zustand for global auth state ([src/store/userStore.ts](src/store/userStore.ts))
   - TanStack Query for server state caching
   - Query keys follow pattern: `["action-resource", ...params]` (e.g., `["get-floors", page]`)

5. **Error Handling** ([src/utils/handleApiError.tsx](src/utils/handleApiError.tsx)):
   - Centralized error mapping with user-friendly messages
   - Maps error codes like `USER_EXISTS`, `INVALID_PASSWORD`, `FLOOR_NOT_FOUND`, etc.
   - Returns structured error object: `{ code, status, message }`
   - UI layers call this function and display the message via toast

6. **Toast Notifications** ([src/components/ToastProvider.tsx](src/components/ToastProvider.tsx)):
   - Custom toast system (not react-hot-toast)
   - Usage: `const toastApi = useToast(); toastApi.show(message, { type, duration })`
   - Types: `error`, `success`, `info`, `warning`
   - Supports persistent on hover

7. **Routing & Animation** ([src/routes/route.tsx](src/routes/route.tsx)):
   - Framer Motion AnimatePresence for page transitions
   - Only login/register pages have animation variants
   - Protected routes wrapped in `<IsRequired>` component

**Important Notes:**

- All API responses follow pattern: `{ ...data.data, status: data.status }`
- Form validation uses Yup schemas with Formik
- RSuite components require explicit CSS imports (e.g., `rsuite/Button/styles/index.css`)
- User roles defined in [src/types/enums/enums.ts](src/types/enums/enums.ts): `ADMIN`, `USER`
