describe('word.count.kata', function() {
  var subject;

  beforeEach(function() {
    subject = kata;
  });

  it('will give the correct count given one word', function() {
    var count = subject.getWordCount('word');
    expect(count['word']).toEqual(1);
  });
});