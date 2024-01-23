<div align="center">
    <a href="https://hellob.art/"><img src="https://github.com/bartvdbraak/hellob.art/assets/3996360/365337f4-0ad8-4107-bcb1-8a4843ceae94" alt="hellob.art" width="30%"></a>
    <p><em>current work and studies in a SvelteKit-based portfolio</em></p>
</div>

<div align="center">
  <a href="https://sonarcloud.io/summary/new_code?id=bartvdbraak_hellob.art"><img src="https://sonarcloud.io/api/project_badges/measure?project=bartvdbraak_hellob.art&metric=alert_status" /></a>
  <a href="https://hellobart-unlighthouse.pages.dev"><img src="https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/bartvdbraak/795a3d6af5b0db5754cf7279898c3c16/raw/hellob.art-unlighthouse.json" /></a>
  <a href="https://github.com/bartvdbraak/hellob.art/deployments/activity_log?environment=Production"><img src="https://img.shields.io/github/deployments/bartvdbraak/hellob.art/production?label=vercel&logo=vercel" /></a>
</div>

## Description

This is a personal website built with Svelte and SvelteKit. It includes a variety of components and routes, and it's styled with Tailwind CSS. The project is set up with a number of quality assurance tools, including ESLint, Prettier, and Husky.

## Installation

To install the project and its dependencies, follow these steps:

1.  Ensure you have `pnpm` installed on your system. If not, you can install it by running:

    ```sh-session
    npm install -g pnpm
    ```

2.  Run the following command to install the project dependencies:
    ```sh-session
    pnpm install
    ```

## Build

To build the project, execute the following command:

```sh-session
pnpm build
```

## Run

To run the project locally, use the following command:

```sh-session
pnpm run dev
# or
pnpm run dev -- --open
```

## Project Structure

This project has the following structure:

- `src/`: This is where the main application code is stored. This includes:
  - `app.d.ts`, `app.html`, `app.pcss`: Main application files.
  - `lib/`: Contains assets, components, config, content, etc.
  - `routes/`: Contains routing layout, pages and server-side code.
  - `styles/`: Contains style files.
- `static/`: Contains static files like `browserconfig.xml`, `site.webmanifest`, and fonts.
- `.github/`: Contains GitHub related files like `dependabot.yml`, `renovate.json`, and workflows.
- Configuration files: `.eslintignore`, `.eslintrc.cjs`, `.gitignore`, `.npmrc`, `.prettierignore`, `.prettierrc`, `postcss.config.cjs`, `svelte.config.js`, `tailwind.config.js`, `tsconfig.json`, `vite.config.ts`.

## Contributing

I'm open to contributions! If you find any bugs, have suggestions, or want to add something interesting, feel free to open an issue or submit a pull request.

## License

This project is licensed under the terms of the [LICENSE](LICENSE) file.
