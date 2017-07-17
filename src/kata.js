var kata = (function() {
  function getWordCount(paragraph) {
    var wordCounts = {};

    var allWords = paragraph.split(' ');

    _.each(allWords, function (word) {
      var lowerCaseWord = word.toLowerCase();
      var isExistingWord = wordCounts.hasOwnProperty(lowerCaseWord);
      wordCounts[lowerCaseWord] = isExistingWord ? wordCounts[lowerCaseWord] + 1 : 1;
    });

    return wordCounts;
  }

  return {
    getWordCount: getWordCount
  };
})();
