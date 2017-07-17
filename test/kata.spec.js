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
});