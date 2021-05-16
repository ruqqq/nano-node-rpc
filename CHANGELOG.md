# Changelog

## v1.0.4

### Fixed

- Fixed `delegators` RPC return type.

## v1.0.3

### Fixed

- Fixed `delegators_count` function to now send correct RPC action.

## v1.0.2

### Added

- Added type `ErrorResponse` for RPC errors.

### Changed

- Changed `account_info` `params` to be optional.

## v1.0.1

### Added

- Added MIT license to package.json

## v1.0.0 

### Added

- Added `accounts_balances`, `accounts_frontiers`, `accounts_pending`, 
  `active_difficulty`, `block_confirm', confirmation_quorum`, `validate_account_number`, `version`, &
  `uptime` RPC support in addition to those found in v0.0.1.
- Added generic typing to `peers` RPC request.

### Fixed
-  Fixed optional params not be applied to `chain` RPC call.

## v0.0.1
Initial Release