# brijr/supra: Next.js and Supabase Starter Kit

This guide will help you get started with the `brijr/supra` Starter Kit, which provides a robust foundation for building web applications with authentication, server-side rendering, and more.

## Table of Contents

- [brijr/supra: Next.js and Supabase Starter Kit](#brijrsupra-nextjs-and-supabase-starter-kit)
  - [Table of Contents](#table-of-contents)
  - [Setup](#setup)
  - [Project Structure](#project-structure)
  - [Authentication](#authentication)
  - [Styling](#styling)
  - [Server Actions](#server-actions)
  - [Middleware](#middleware)
  - [Environment Variables](#environment-variables)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/brijr/supra.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd supra
   ```

3. **Install dependencies:**

   ```bash
   pnpm install
   ```

4. **Set up your Supabase project and update the `.env.local` file with your Supabase URL and anon key:**

   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

5. **Run the development server:**

   ```bash
   pnpm dev
   ```

## Project Structure

The project follows a standard Next.js structure with some additional folders:

- `app/`: Contains the main application code, including pages and layouts.
- `components/`: Reusable React components.
- `utils/`: Utility functions and Supabase client setup.
- `lib/`: Additional utility functions.

## Authentication

The starter kit comes with pre-built authentication pages and functionality:

1. **Sign Up:** `/sign-up`
2. **Sign In:** `/sign-in`
3. **Forgot Password:** `/forgot-password`
4. **Reset Password:** `/reset-password`

To use these features, refer to the following files:

- **Sign Up Page:** `app/(auth-pages)/sign-up/page.tsx`
- **Sign In Page:** `app/(auth-pages)/sign-in/page.tsx`
- **Forgot Password Page:** `app/(auth-pages)/forgot-password/page.tsx`
- **Reset Password Page:** `app/(app)/reset-password/page.tsx`

These pages utilize server actions for handling form submissions, which are defined in `app/actions.ts`.

## Styling

The project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.ts` file:

- **Dark Mode:** Enabled via class.
- **Content Paths:** Includes all `ts` and `tsx` files in `pages`, `components`, `app`, and `src` directories.
- **Theme Customization:** Extend colors, border radius, keyframes, and animations.

## Server Actions

Server actions are used for handling form submissions and authentication. They are defined in the `app/actions.ts` file. These actions include:

- **signUpAction:** Handles user registration.
- **signInAction:** Manages user login.
- **forgotPasswordAction:** Initiates password reset process.
- **resetPasswordAction:** Updates user password.
- **signOutAction:** Logs out the user.

To use a server action, import it and pass it to the `formAction` prop of the `SubmitButton` component.

## Middleware

The project includes middleware for handling authentication and protected routes. You can find it in the `middleware.ts` file. The middleware uses the `updateSession` function from `utils/supabase/middleware.ts` to manage user sessions and protect routes like `/admin`.

## Environment Variables

Ensure your environment variables are set up in the `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```
```

</rewritten_file>
