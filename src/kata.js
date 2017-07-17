var kata = (function() {
  function getWordCount(paragraph) {
    var wordCounts = {};

    wordCounts[paragraph] = 1;

    return wordCounts;
  }

  return {
    getWordCount: getWordCount
  };
})();
