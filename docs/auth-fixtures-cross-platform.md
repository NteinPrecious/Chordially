# Cross-Platform Auth Fixtures

Issue: #390

Shared fixture profile names:

- `auth_fixture_valid_user`
- `auth_fixture_locked_user`
- `auth_fixture_unverified_user`

Required shared fields:

- `email`
- `password`
- `accountState`
- `roles`

Each platform test suite (API, web, mobile) should map these profiles to local setup helpers.
