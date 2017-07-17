var kata = (function() {
  function getWordCount(paragraph) {
    var wordCounts = {};

    var allWords = paragraph.split(' ');

    _.each(allWords, function (word) {
      var isExistingWord = wordCounts.hasOwnProperty(word);
      wordCounts[word] = isExistingWord ? wordCounts[word] + 1 : 1;
    });

    return wordCounts;
  }

  return {
    getWordCount: getWordCount
  };
})();
