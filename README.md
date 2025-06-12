# STLR Stamps

STLR Stamps is a digital stamp-card loyalty system. It allows merchants to reward repeat customers via an app. Customers collect stamps by NFC or manual input and redeem rewards when thresholds are met.

This repository contains the starting point for the project. The backend uses Node.js with Express and an in-memory data store for development. Frontend and mobile clients will be added later.

## Setup

1. Install Node.js (v20 or higher).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

- `index.js` – main Express server wiring up API routes.
- `.gitignore` – ignores runtime files like `node_modules`.
- `package.json` – npm configuration.
- `README.md` – this file.

Additional directories for frontend, mobile, and admin dashboards will be added as the project evolves.

### Example Usage

After starting the server you can create a merchant and stamp card using `curl`:

```bash
curl -X POST http://localhost:3000/merchants \
  -H 'Content-Type: application/json' \
  -d '{"name":"Cafe"}'

curl -X POST http://localhost:3000/stamp-cards \
  -H 'Content-Type: application/json' \
  -d '{"merchantId":"<merchantId>","stampsRequired":10,"rewardDesc":"Free coffee"}'
```
