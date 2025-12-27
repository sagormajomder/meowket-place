# MeowketPlace - Your one‑stop shop for happy pets

MeowketPlace is a pet‑focused marketplace built to simplify shopping for pet essentials. We provide a clean, user‑friendly platform where owners discover trusted products, explore new arrivals, and enjoy a joyful, reliable experience for their beloved companions

## Technology Used

- **Frontend**: JavaScript, NextJs
- **Backend**: NextJs
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Setup & installation instructions

Follow these steps to run the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/sagormajomder/meowket-place.git
   cd meowket-place
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or if you prefer yarn:

   ```bash
   yarn install
   ```

3. **Set up environment variables**

Create a .env file in the root directory and add the following environment variables:

```
   // Example .env file
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<get from clerk>
   CLERK_SECRET_KEY=<get from clerk>
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/register
   MONGODB_URI=<get from mongodb>
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   NEXT_PUBLIC_IMGBB_API_KEY=<get from imgbb>

```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Route summary

The project currently supports the following routes:

| Route                        | Description                                        |
| ---------------------------- | -------------------------------------------------- |
| `/`                          | Home page                                          |
| `/products`                  | Displays all available products                    |
| `/about`                     | About Us section                                   |
| `/contact`                   | Contact page                                       |
| `/login`                     | User login page                                    |
| `/product-details/prpductID` | Product Details Page                               |
| `/dashboard/add-product/`    | Page for add product                               |
| `/dashboard/my-product/`     | Page for manage product added by the loggedin user |
| `/dashboard/wishlist/`       | User's wishlist                                    |

## Live URL

#### 🚀 Live Project URL: https://meowket-place.vercel.app/

## Project Dependencies

#### Dependencies List

```
    "dependencies": {
    "@clerk/nextjs": "^6.35.5",
    "daisyui": "^5.5.5",
    "mongodb": "^7.0.0",
    "next": "16.0.3",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "react-hook-form": "^7.66.1",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0"
  }
```

#### Dev Dependencies List

```
 "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.0.3",
    "tailwindcss": "^4"
  }
```

## Connect with Me

✨ Let's connect on different platforms! Feel free to reach out.

🐦 **Twitter:** [@sagormajomder](https://twitter.com/sagormajomder)

🐙 **GitHub:** [@sagormajomder](https://github.com/sagormajomder)

📘 **Facebook:** [@sagormajomder](https://facebook.com/sagormajomder)

🔗 **LinkedIn:** [@sagormajomder](https://www.linkedin.com/in/sagormajomder/)
