# remix-cf-template

> **based on Remix V0.21**

- [Remix Docs](https://docs.remix.run)

## Preconfiguration

- Tailwind

- Prettier

- Cypress

- Workflow to publish using `wrangler` to cf worker

## Node

Wrangler expects atleast Node version of >=16.7. The required node version is managed using `nvm` inside the `.nvmrc` file

## Development

```sh
npm run dev
```

this will start the Tailwind, Remix and Wrangler servers in `watch` mode

## Deployment

- First login to your cloudflare account using the [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/install-update).

- Update the project name inside [wrangler.toml](https://github.com/Girish21/remix-cloudflare-template/blob/main/wrangler.toml)

- Preview the app using `wrangler preview`

```sh
npx wrangler preview
```

- Then run `wrangler publish` to publish the app to the wrokers

```sh
npx wrangler publish
```

## CI/CD

This template comes with a basic workflow included to build and pusblish to the wrokers.

For this to work setup the CI environment by adding

- CF_API_TOKEN

- CF_ACCOUNT_ID

to the projects secrects.

These values could be found / created on your Cloudflare Dashboard.
