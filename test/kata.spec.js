describe('word.count.kata', function() {
  var subject;

  beforeEach(function() {
    subject = kata;
  });

  it('will give the correct count given one word', function() {
    var count = subject.getWordCount('word');
    expect(count['word']).toEqual(1);
  });

  it('can handle two words', function() {
    var counts = subject.getWordCount('word up');
    expect(counts['word']).toEqual(1);
    expect(counts['up']).toEqual(1);
  });

  it('can handle repeated words', function () {
    var counts = subject.getWordCount('word word');
    expect(counts['word']).toEqual(2);
  });

  it("doesn't care about casing for the words", function() {
    var counts = subject.getWordCount('WORD word');
    expect(counts['word']).toEqual(2);
  });

  it('ignores punctuation on a word', function() {
    var counts = subject.getWordCount('word up!');
    expect(counts['word']).toEqual(1);
    expect(counts['up']).toEqual(1);
  });

  it('treats other whitespace characters as delimiters', function() {
    var counts = subject.getWordCount('word\r\nword');
    expect(counts['word']).toEqual(2);
  });
});