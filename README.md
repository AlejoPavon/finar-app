# FinAR - Personal Finance Management System

![Next.js](https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)

**FinAR** is a modern full-stack financial platform designed to centralize and track your assets within the Argentinian economic ecosystem. It allows users to monitor income, expenses, and dual-currency savings (ARS/USD) across multiple platforms using a secure, decoupled architecture.

---

## Key Features

-   **Multi-Account Dashboard:** Manage balances from Mercado Pago, Brubank, Cash, and Traditional Banks in one place.
-   **Dual-Currency Support:** Native management for both Argentine Pesos (ARS) and US Dollars (USD) accounts.
-   **Transaction Tracking:** Detailed logging of income and expenses with smart categorization.
-   **Advanced Filtering:** Easily filter movements by date, account, or category to understand your spending habits.
-   **Social Authentication:** Quick and secure access via Google and GitHub (powered by Laravel Socialite).

---

## System Architecture

The project follows a **Separation of Concerns (SoC)** approach:

-   **Backend:** Robust RESTful API built with **Laravel 12**.
-   **Frontend:** Highly interactive UI built with **Next.js 16 (App Router)** and **Tailwind CSS**.
-   **Communication:** JSON data exchange via Axios with interceptors for seamless token management.
-   **Security:** Secure session and API management using **Laravel Sanctum**.
