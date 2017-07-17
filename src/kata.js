var kata = (function() {
  function getWordCount(paragraph) {
    var wordCounts = {};

    var allWords = paragraph.split(/\s/g);

    _.each(allWords, function (word) {
      var cleanedWord = cleanUpTheWord(word);
      var isExistingWord = wordCounts.hasOwnProperty(cleanedWord);
      wordCounts[cleanedWord] = isExistingWord ? wordCounts[cleanedWord] + 1 : 1;
    });

    return wordCounts;
  }

  function cleanUpTheWord(word) {
    var punctuation = new RegExp(/[.,\/#!$%\^&\*;:{}=\-_`~()]/, 'g');
    var withoutPunctuation = word.replace(punctuation,'');
    return withoutPunctuation.toLowerCase();
  }

  return {
    getWordCount: getWordCount
  };
})();
