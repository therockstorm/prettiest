import babel from "prettier/parser-babel";
import graphQl from "prettier/parser-graphql";
import html from "prettier/parser-html";
import markdown from "prettier/parser-markdown";
import postcss from "prettier/parser-postcss";
import typescript from "prettier/parser-typescript";
import yaml from "prettier/parser-yaml";
import { format } from "prettier/standalone";

const [after, before, error, formatSelect, pretty] = [
  "after",
  "before",
  "error",
  "format",
  "pretty",
].map(document.getElementById);

pretty.addEventListener(
  "click",
  function () {
    error.innerText = "";

    try {
      after.value = format(before.value, {
        parser: formatSelect.value,
        plugins: [babel, graphQl, html, markdown, postcss, typescript, yaml],
      });
    } catch (e) {
      error.innerText = e.message;
    }
  },
  false
);
