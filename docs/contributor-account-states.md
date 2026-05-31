# Contributor Account States

Issue: #392

Use explicit states instead of inferring from missing fields.

- `invited`: invitation created, account not activated yet.
- `pending_verification`: account created, email verification incomplete.
- `active`: fully authenticated and allowed to use contributor features.
- `locked`: temporarily blocked after security or abuse signals.
- `disabled`: intentionally deactivated by admin action.

State transitions should be audited and logged by state name.
