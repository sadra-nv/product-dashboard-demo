# 🛍️ Product Manager App

A React-based application for managing and showcasing products. This app supports adding, listing, and viewing detailed information about products, with full image handling and local persistence via IndexedDB.

---

## ✨ Features

### 🏠 Home Page

- Displays a list of all created products.

### ➕ Add Product Page

- **Form Handling**:
  - Built with [React Hook Form](https://react-hook-form.com/) and validated with [Zod](https://zod.dev/).
- **Image Upload & Editing**:
  - Upload via drag-and-drop, file picker, or clipboard paste.
  - Crop images before upload using `react-cropper`.
- **Product Attributes**:
  - Select product size, color, and quantity.
- **Data Persistence**:
  - Products are saved locally using IndexedDB.

### 📄 Product Detail Page

- View full product information.

---

## 🧰 Tech Stack

- React 19
- TypeScript
- Tailwind 4
- React Router
- React Hook Form
- React Cropper
- Zod
- IndexedDB
- class-variance-authority
- clsx
- tailwind-merge
- phosphoricons

---
