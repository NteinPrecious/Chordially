# Chordially

**Chordially** is a music and fan engagement platform that helps creators connect with their audience through digital experiences, community-driven interactions, and Stellar-powered payment flows.

The project brings together a web app, mobile app, backend API, and dedicated Stellar service in a single TypeScript monorepo. The goal is to create a reliable foundation for building creator profiles, fan experiences, wallet-enabled interactions, and payment features across both web and mobile.

Chordially is designed for the modern creator economy, where artists, musicians, and creators need more direct ways to engage their fans, receive support, and build stronger digital communities.

---

## What Chordially Does

Chordially focuses on the relationship between creators and fans.

Creators can use the platform to build their presence, manage their profile, and create engagement opportunities for their audience. Fans can discover creators, interact with them, support them, and participate in experiences that go beyond passive listening or following.

The Stellar integration allows the platform to support fast, low-cost payment primitives that can later power features such as:

* fan-to-creator payments,
* creator support,
* digital rewards,
* wallet-based interactions,
* payment confirmations,
* on-chain transaction tracking,
* creator monetization flows.

The project is structured to support both early MVP development and future expansion into richer creator and fan experiences.

---

## Core Product Areas

### Creator Experience

Creators are the main users who build and manage their public presence on Chordially.

The creator experience may include:

* creator profile setup,
* creator bio and public details,
* music or content-related profile information,
* fan engagement tools,
* payment or support options,
* activity history,
* creator dashboard features.

The platform is intended to give creators a direct channel to connect with fans without relying only on traditional social media platforms.

---

### Fan Experience

Fans can use Chordially to discover creators, follow their activity, and engage with them through interactive experiences.

The fan experience may include:

* browsing creator profiles,
* engaging with creator content,
* supporting creators through Stellar-powered payments,
* viewing interaction or payment history,
* participating in creator-led campaigns,
* accessing mobile-first engagement flows.

The mobile app is especially important for fan interactions because many fan engagement flows are expected to happen quickly, casually, and on the go.

---

### Stellar Payment Layer

Chordially includes a dedicated Stellar service to keep blockchain-related operations separate from the main application logic.

This service is responsible for handling Stellar-specific workflows such as:

* wallet-related operations,
* transaction preparation,
* transaction submission,
* payment status checks,
* Horizon API communication,
* Stellar network configuration,
* payment and wallet abstractions used by the rest of the platform.

By isolating Stellar logic into its own service, the project remains easier to maintain and safer to extend as the payment layer grows.

---

## Tech Stack

Chordially is built with a modern full-stack TypeScript setup.

| Area               | Technology                             |
| ------------------ | -------------------------------------- |
| Web App            | React / Next.js                        |
| Mobile App         | React Native / Expo                    |
| Backend API        | Express.js                             |
| Blockchain Service | Stellar                                |
| Language           | TypeScript                             |
| Package Manager    | pnpm                                   |
| Architecture       | Monorepo                               |
| Shared Code        | Internal packages for config and types |

---

## Repository Structure

```txt
chordially/
├── apps/
│   ├── api/
│   ├── web/
│   ├── mobile/
│   └── stellar-service/
│
├── packages/
│   ├── config/
│   └── types/
│
└── README.md
```

---

## Applications

### `apps/api`

The API app is the main backend service for Chordially.

It handles the server-side logic needed by the web and mobile clients. This includes authentication-related routes, user flows, creator and fan data, and future business logic for engagement features.

Expected responsibilities include:

* authentication and session-related endpoints,
* user profile APIs,
* creator profile APIs,
* fan interaction APIs,
* payment request coordination,
* communication with the Stellar service,
* shared business rules for web and mobile clients.

---

### `apps/web`

The web app provides the browser-based Chordially experience.

It is intended for flows that benefit from a wider screen and richer layout, such as creator onboarding, creator dashboards, profile management, and administrative or operational views.

Expected responsibilities include:

* landing and product pages,
* creator onboarding,
* creator profile management,
* dashboard views,
* account settings,
* wallet/payment UI,
* fan-facing creator pages.

---

### `apps/mobile`

The mobile app provides the React Native experience for Chordially.

It is intended for mobile-first fan and creator interactions. Fans should be able to access creator experiences quickly, while creators can manage lightweight actions from their phones.

Expected responsibilities include:

* mobile authentication flows,
* fan discovery,
* creator profile viewing,
* fan engagement actions,
* wallet/payment interactions,
* mobile notifications or activity views,
* simplified creator tools.

---

### `apps/stellar-service`

The Stellar service is responsible for blockchain and payment-related operations.

Instead of mixing Stellar logic directly into the API, Chordially separates this into a dedicated service. This keeps the payment layer easier to test, replace, secure, and extend.

Expected responsibilities include:

* Stellar network configuration,
* Horizon API interaction,
* transaction creation,
* transaction submission,
* wallet-related utilities,
* payment validation,
* transaction status checks,
* reusable Stellar abstractions for the API.

---

## Shared Packages

### `packages/config`

Shared configuration for the monorepo.

This package contains reusable project defaults such as TypeScript configuration and other shared development settings used across apps.

---

### `packages/types`

Shared TypeScript types used across the platform.

This helps keep the API, web app, mobile app, and Stellar service aligned. Instead of redefining the same user, creator, payment, or response types in multiple places, common types can live here and be reused across the workspace.

Examples of shared types may include:

* user types,
* creator profile types,
* fan profile types,
* authentication response types,
* payment request types,
* Stellar transaction types,
* API response types.

---

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

* Node.js
* pnpm
* Git
* Expo tooling for mobile development

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/chordially.git
cd chordially
```

Install dependencies:

```bash
pnpm install
```

---

## Running the Apps

Start the API service:

```bash
pnpm dev:api
```

Start the web app:

```bash
pnpm dev:web
```

Start the mobile app:

```bash
pnpm dev:mobile
```

Start the Stellar service:

```bash
pnpm dev:stellar
```

For local development, each service should usually run in its own terminal window.

---

## Environment Variables

Each app can have its own environment file.

Recommended structure:

```txt
apps/api/.env
apps/web/.env.local
apps/mobile/.env
apps/stellar-service/.env
```

Example variables:

```env
API_PORT=
WEB_APP_URL=
MOBILE_APP_SCHEME=
DATABASE_URL=
JWT_SECRET=

STELLAR_NETWORK=
STELLAR_HORIZON_URL=
STELLAR_ISSUER_PUBLIC_KEY=
STELLAR_DISTRIBUTION_PUBLIC_KEY=
STELLAR_DISTRIBUTION_SECRET_KEY=
```

The exact variables may change as the platform grows.

Do not commit real secrets, private keys, or production credentials.

---

## Product Direction

Chordially is being built around a simple idea:

> Creators should have a more direct, flexible, and rewarding way to connect with their fans.

The early product foundation is focused on:

1. User authentication.
2. Creator and fan profiles.
3. Shared web and mobile user flows.
4. Stellar-powered payment primitives.
5. Creator support and fan engagement features.
6. Reliable backend APIs.
7. Clean separation between product logic and blockchain logic.

As the project grows, Chordially can expand into more advanced experiences such as campaigns, creator communities, digital rewards, exclusive fan interactions, and richer wallet-based features.

---

## Example User Flow

A typical Chordially flow may look like this:

1. A creator creates an account.
2. The creator sets up their public profile.
3. A fan discovers or visits the creator profile.
4. The fan chooses to support or interact with the creator.
5. The platform prepares a Stellar-powered payment or engagement action.
6. The Stellar service handles the transaction workflow.
7. The API records the result and updates the relevant user activity.
8. The creator and fan can both view the completed interaction.

This flow allows Chordially to combine familiar creator platform behavior with blockchain-powered payments behind the scenes.

---

## Development Guidelines

When working on Chordially, keep the codebase clear, typed, and maintainable.

Recommended principles:

* Keep product logic readable and easy to follow.
* Use shared types where data crosses app boundaries.
* Keep Stellar-specific logic inside `apps/stellar-service`.
* Avoid duplicating API contracts across apps.
* Keep web and mobile flows aligned where possible.
* Prefer small, focused changes.
* Document important setup or architecture decisions.
* Do not commit secrets or private keys.

---

## Scripts

Common development commands:

```bash
pnpm install
pnpm dev:api
pnpm dev:web
pnpm dev:mobile
pnpm dev:stellar
```

Additional scripts may be added for:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

---

## Current Status

Chordially is currently in active development.

The current focus is on establishing the core application structure, authentication foundation, shared types, and Stellar service architecture. Once the base flows are stable, the project can expand into deeper creator and fan engagement features.

---

## License

License information should be added before public release.
