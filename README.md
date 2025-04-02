![Next.js App Router Hosted Login Banner](/public/assets/next-banner.png)

# Next.js App Router sample

This sample showcases how to seamlessly add authentication and user management to your React app using Frontegg’s embedded login method.

## This app showcases

- Redirect users to Frontegg’s embedded login
- Enable a fully integrated self-service portal
- Manage and track user authentication state
- Access and display user profile details
- Handle account state and data with ease
- Implement seamless account switching functionality

## Project structure

The project follows the Next.js App Router structure:

```
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with Frontegg provider
│   │   ├── page.tsx       # Home page
│   │   └── account/      # Protected account route
│   ├── components/       # Reusable components
├── public/             # Static assets
```

## Get started in a few simple steps

If you don’t have a Frontegg account or prefer to use the sandbox credentials, feel free to skip to step **3**.

If you're using your own credentials, follow the guidelines below.

### 1. Configure your Frontegg application (if using your own account) -

1. Go to [Frontegg Portal](https://portal.frontegg.com/)
2. Get your application ID from [ENVIRONMENT] → Applications
3. Get your Frontegg domain from the Frontegg Portal → [ENVIRONMENT] → Keys & domains
4. This sample runs on `http://localhost:3000`. If your application uses a different port, make sure to add `http://localhost:3000` under → [ENVIRONMENT] → Authentication → Login method → Redirect URLs
5. This sample runs on `http://localhost:3000`. You may need to add `http://localhost:3000` under → [ENVIRONMENT] → Keys & domains → Allowed origins

### 2. Configure environment variables -

Update the `.env.local` file in the root directory with your Frontegg credentials. Then, choose your preferred login mode by setting `FRONTEGG_HOSTED_LOGIN` to false for embedded login. By default, the Frontegg sandbox environment runs in hosted mode.

```env
FRONTEGG_BASE_URL=<YOUR_BASE_URL>
FRONTEGG_CLIENT_ID=<YOUR_CLIENT_ID>
FRONTEGG_APP_ID=<YOUR_APP_ID>
FRONTEGG_ENCRYPTION_PASSWORD=<YOUR_ENCRYPTION_PASSWORD>
FRONTEGG_HOSTED_LOGIN=<true|false>
```

### 3. Clone the repository - 

Run the following command:

```bash
npm clone <repo>
```

### 4. Install dependencies -

Run the following command:

```bash
npm install
```

### 5. Run the application -

```bash
npm run dev
```

That’s it — you're all set!

The app will be available at [http://localhost:3000](http://localhost:3000).

### Experience Frontegg in action!