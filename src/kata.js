var kata = (function() {
  function getWordCount(paragraph) {
    var wordCounts = {};

    var allWords = paragraph.split(/\s/g);

    _.each(allWords, function (word) {
      var cleanedWord = cleanUpTheWord(word);
      if (!cleanedWord) return;

      var isExistingWord = wordCounts.hasOwnProperty(cleanedWord);
      wordCounts[cleanedWord] = isExistingWord ? wordCounts[cleanedWord] + 1 : 1;
    });

    return wordCounts;
  }

  function cleanUpTheWord(word) {
    var punctuationBeginning = new RegExp(/^[.,\/#!$%\^&\*;:{}=\-_`~()]/, 'g');
    var punctuationEnd = new RegExp(/[.,\/#!$%\^&\*;:{}=\-_`~()]$/, 'g');

    var withoutNumericValues = word.replace(/\d+/g, '');

    var withoutPunctuationBeginning = withoutNumericValues.replace(punctuationBeginning, '');
    var withoutPunctuationEnd = withoutPunctuationBeginning.replace(punctuationEnd, '');

    return withoutPunctuationEnd.toLowerCase();
  }

  function sortResults(wordCounts) {
    var niceLookingObjects = _.map(wordCounts, function (count, word) {
      return { word: word, count: count };
    });

    return _.sortBy(niceLookingObjects, function (value) { return value.count; }).reverse();
  }

  return {
    getWordCount: getWordCount,
    sortResults: sortResults
  };
})();
