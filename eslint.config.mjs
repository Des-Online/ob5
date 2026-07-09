import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  { ignores: ["work/**", "node_modules/**", ".next/**"] },
  ...nextVitals,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react-hooks/set-state-in-effect": "off"
    }
  }
];

export default config;
