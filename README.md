# Otaghak code challenge

This is a simple web app built using Next.js (TypeScript) and Tailwind CSS,
following the design provided in the
[design](https://www.figma.com/file/4Hg0SjoCHcjQ7Yxa6muIzz/Otaghak-Code-Challenge?type=design&node-id=0%3A1&mode=design&t=wN9QNYn7K0miAvXa-1)
link. The app allows the user to click the cards to see a product detail.

Please create a branch of master branch in your name [ like
yourName/feat/commitName ] and after completing the project, push your branch
and make a pull request into master.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Tech Stack

-   **Next.js**: A framework for server-rendered React applications.
-   **TypeScript**: A statically typed superset of JavaScript.
-   **Tailwind CSS**: A utility-first CSS framework.
-   **Jest**: A testing framework for JavaScript.
-   **React Testing Library**: A library for testing React components.
-   **CSS Modules**: A way to write scoped CSS in JavaScript.

## Features

-   Created a page at `/city/[CityName]` route.
-   Used the following API for list data:

```js
baseURL: 'https://develop.core.otaghak.com/',
method: 'post',
url: 'odata/Otaghak/RoomsSearch/SearchRooms()',
data: {
  checkIn: null,
  checkOut: null,
  attributes: [],
  rules: [],
  filter: "cityCode eq 'CityName' and includeAroundLocations eq true&$top=24&$skip=0&$count=true",
}



```
