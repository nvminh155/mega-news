import React, { useEffect } from "react";

const master_url = "https://cors-anywhere-1c2n.onrender.com/";
const dic_cambridge = "https://dictionary.cambridge.org/dictionary/english/";
const hiphop = "https://www.wordhippo.com/what-is/";
const words = "by_heart";

async function find_pronounce(words: string[]) {
  const url = master_url + dic_cambridge;
  const pros = words.map(async (w) => {
    const doc = await returnHtmlDoc(url + w);
    const pronounce = doc.querySelector(".us.dpron-i .pron.dpron");
    return pronounce?.textContent;
  });

  return Promise.all(pros);
}

async function findTypeWordForm(word: string) {
  const types = [
    "the-verb-for",
    "the-adjective-for",
    "the-adverb-for",
    "the-noun-for",
  ];
  types.forEach(t => {
    const url = master_url + hiphop + t + "/" + word;
    returnHtmlDoc(url).then((doc) => {
      const type = doc.querySelector(".word-type");
      console.log(type?.textContent);
    });
  })
}

async function returnHtmlDoc(url: string) {
  const response = await fetch(url);
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc;
}

const What = () => {
  useEffect(() => {
    find_pronounce(["laziness"]).then((res) => console.log(res));
  }, []);
  return <div></div>;
};

export default What;
