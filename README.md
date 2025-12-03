# WarmPaws: Premium Winter Pet Care Services

## Project Name

**WarmPaws**

## Purpose

WarmPaws is a modern, single-page application (SPA) designed to serve as a
premium online booking platform for specialized winter pet care services. The
goal is to provide pet owners with a safe, cozy, and professional way to book
everything from paw treatments and winter coat fittings to snow safety training,
all wrapped in an elegant, winter-themed user interface.

## Live URL

[https://warmpaws-mt.netlify.app/]

---

### Key Feature

- **Design:** Cohesive **"WarmPaws"** winter color palette (Deep Peach/Burnt
  Orange, Dark Teal/Evergreen, Snowy Linen) implemented across all pages using
  Tailwind CSS.
- **Dynamic Home Page:** Features a responsive Hero Slider, popular services,
  winter care tips,expert vets, and an testimonial slider built with
  **Swiper.js**.
- **Dedicated Service Page** A dedicated service page for all pet services ,
  also user can filter services by category or price or search by name.
- **Service Detail:** In service Detail page shows all service related data and
  a form for contact or Book the service.
- **Profile :** A Profile page for user profile data display and update user
  name and photo url.
- **404 Error Page:** error page for improved user retention with Home And
  services button.
- **Loader:** full apps are under a loading spinner and skeleton loader for when
  data are fetching or loading.

### Authentication

- **Login/SignUp:** Fully Functional Login And SignUp pages for user
  authentications . Used Firebase for user Authentication.
- **Full Auth Flow:** Includes a dedicated **Forgot Password** page with logic
  to pre-fill the user's email from the login screen and redirect to Gmail upon
  submission.
- **Private Route:** Private route for only logged user , in service detail page
  and profile page are only accessible when user are logged .

---

### Dependencies

```bash
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^7.0.1",
    "@fortawesome/free-brands-svg-icons": "^7.0.1",
    "@fortawesome/free-regular-svg-icons": "^7.0.1",
    "@fortawesome/free-solid-svg-icons": "^7.0.1",
    "@fortawesome/react-fontawesome": "^3.0.2",
    "@tailwindcss/vite": "^4.1.13",
    "aos": "^2.3.4",
    "axios": "^1.12.2",
    "firebase": "^12.4.0",
    "lucide-react": "^0.546.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router": "^7.9.3",
    "react-spinners": "^0.17.0",
    "react-toastify": "^11.0.5",
    "swiper": "^12.0.3",
    "tailwindcss": "^4.1.13"
  },
```

## 📦 Key NPM Packages Used

This project relies primarily on **React**, **Tailwind CSS**, and **DaisyUI**
for rapid development and styling.

| Package              | Purpose                                                                                                      |
| :------------------- | :----------------------------------------------------------------------------------------------------------- |
| **`react-router`**   | Handles all client-side routing between pages (`/login`, `/services`, `/404`, etc.).                         |
| **`swiper`**         | Modern touch slider component used for the **Hero Slider** and the **Testimonials Slider**.                  |
| **`lucide-react`**   | High-quality, customizable icons used throughout the entire application.                                     |
| **`React-Toastify`** | (Assumed) Used for simple, thematic success notifications (toasts) on form submissions (e.g., Book Service). |
| **`aos`**            | (Assumed) Animate On Scroll library for tasteful entry animations on sections and cards.                     |


### 🚀 Getting Started (Local Setup)

To view and run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/TheMamunDev/warm-paws.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd warm-paws
    ```
3. **Change The Firebase Config**
    Change firebase config in firebase.init.js
    add firebase key in .env file
   
5. **Run**
   ```bash
   npm install
   npm run dev
   ```
### 👨‍💻 Author

This project was developed by **Mahmud Hasan Mamun**.

* **GitHub:** [@TheMamunDev](https://github.com/TheMamunDev)
