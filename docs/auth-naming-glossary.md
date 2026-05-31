# Auth Naming Glossary

Issue: #393

- `account`: the persistent identity record for a person in the system.
- `session`: an active authenticated context tied to an account.
- `access token`: short-lived token used to authorize API requests.
- `refresh token`: longer-lived token used to rotate and re-issue access tokens.
- `verification token`: one-time token used to confirm email ownership.
- `password reset token`: one-time token used to authorize password changes.
- `auth state`: the current authentication status (`anonymous`, `authenticated`, `locked`, or `pending_verification`).

Use these terms consistently across API, web, mobile, docs, and issue writeups.
