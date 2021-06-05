# react-pokedex

## 🚧 How it works

I should probably deploy it but you can go to `/about/1` to view the info for the Pokemon with the ID 1. You can change the number to get the info for a random pokemon. On the main page `/`, you can filter Pokemon by name using the input.

## 📝 What it uses
- built on `create-react-app`
- uses Tailwind CSS for styling which requires [CRACO](https://github.com/gsoft-inc/craco) because cra doesn't allow you to override the existing PostCSS configuration natively
- `react-router-dom` for routing (see `App.js`)
- react hooks: `useState`, `useEffect` to call the PokeAPI, and `useMemo` to filter the Pokemon

## 🚀 Get Started

1. Clone the repo
```shell
git clone https://github.com/eilla1/react-pokedex.git && cd react-pokedex
```
3. Install dependencies
```shell
npm install
```
4. Start developing
```shell
npm start
```
