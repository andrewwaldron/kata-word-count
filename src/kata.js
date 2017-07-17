var kata = (function() {
  function getWordCount(paragraph) {
    var wordCounts = {};

    var allWords = paragraph.split(' ');

    _.each(allWords, function (word) {
      var cleanedWord = cleanUpTheWord(word);
      var isExistingWord = wordCounts.hasOwnProperty(cleanedWord);
      wordCounts[cleanedWord] = isExistingWord ? wordCounts[cleanedWord] + 1 : 1;
    });

    return wordCounts;
  }

  function cleanUpTheWord(word) {
    return word.toLowerCase();
  }

  return {
    getWordCount: getWordCount
  };
})();
