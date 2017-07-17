var kata = (function() {
  function getWordCount(paragraph) {
    var wordCounts = {};

    var allWords = paragraph.split(' ');

    _.each(allWords, function (word) {
      wordCounts[word] = 1;
    });

    return wordCounts;
  }

  return {
    getWordCount: getWordCount
  };
})();
