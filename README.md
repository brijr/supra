# brijr/supra: Next.js and Supabase Starter Kit

This guide will help you get started with the `brijr/supra` Starter Kit, which provides a robust foundation for building web applications with authentication, server-side rendering, and more.

## Table of Contents

- [brijr/supra: Next.js and Supabase Starter Kit](#brijrsupra-nextjs-and-supabase-starter-kit)
  - [Table of Contents](#table-of-contents)
  - [Setup](#setup)
  - [Project Structure](#project-structure)
  - [Authentication](#authentication)
  - [Styling](#styling)
  - [Supabase Client Setup](#supabase-client-setup)
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

## Supabase Client Setup

The project uses Supabase for database interactions, with separate configurations for client-side and server-side operations.

### Client-Side Supabase Client

The client-side Supabase client is set up in `utils/supabase/client.ts`:

```typescript
import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
```

- **Purpose:** This setup is used for client-side operations, allowing you to interact with Supabase from the browser.
- **Usage:** Import `createClient` from this file wherever you need to perform client-side database operations.

### Server-Side Supabase Client

The server-side Supabase client is set up in `utils/supabase/server.ts`:

```typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = () => {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
};
```

- **Purpose:** This setup is used for server-side operations, allowing you to interact with Supabase securely from the server.
- **Usage:** Import `createClient` from this file wherever you need to perform server-side database operations.

### Example Usage

Here's a basic example of how you might use the Supabase client to fetch data from a table called `profiles`:

#### Client-Side Example

```typescript
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

async function fetchProfiles() {
  const { data, error } = await supabase.from('profiles').select('*');

  if (error) {
    console.error('Error fetching profiles:', error);
  } else {
    console.log('Profiles:', data);
  }
}

fetchProfiles();
```

#### Server-Side Example

```typescript
import { createClient } from "@/utils/supabase/server";

export async function getServerSideProps() {
  const supabase = createClient();
  const { data, error } = await supabase.from('profiles').select('*');

  if (error) {
    console.error('Error fetching profiles:', error);
    return { props: { profiles: [] } };
  }

  return { props: { profiles: data } };
}
```

### Key Points

- **Environment Variables:** Ensure your `.env.local` file is correctly set up with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- **Client vs. Server:** Use the appropriate client setup based on whether your code is running on the client or server.
- **Error Handling:** Always handle errors when interacting with the database to ensure a smooth user experience.

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
