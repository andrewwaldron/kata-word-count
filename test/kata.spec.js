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

  it('handles numeric values, by ignoring them', function() {
    var counts = subject.getWordCount('3:15');
    expect(Object.keys(counts).length).toEqual(0);
  });

  it('handles correctly two whitespace separated numeric values', function() {
    var counts = subject.getWordCount('123 45');
    expect(Object.keys(counts).length).toEqual(0);
  });

  it('ignores puncuation that is INSIDE of a word', function() {
    var counts = subject.getWordCount('hyphenated-word');
    expect(counts['hyphenated-word']).toEqual(1);
  });

  xit('ignores a word with a tick in it as well', function() {
  });

  xit('solves a very complicated paragraph', function() {

  });

  function getComplicatedParagraph() {
    return 'WASHINGTON Unable to rest their eyes on a colorful photograph or boldface heading that could be easily skimmed and forgotten about, Americans collectively recoiled Monday when confronted with a solid block of uninterrupted text.\r\n\r\n' +
      'Dumbfounded citizens from Maine to California gazed helplessly at the frightening chunk of print, unsure of what to do next. Without an illustration, chart, or embedded YouTube video to ease them in, millions were frozen in place, terrified by the sight of one long, unbroken string of English words.\r\n\r\n' +
      '"Why won\'t it just tell me what it\'s about?" said Boston resident Charlyne Thomson, who was bombarded with the overwhelming mass of black text late Monday afternoon. "There are no bullet points, no highlighted parts. I\'ve looked everywhere—there\'s nothing here but words."\r\n\r\n' +
      '"Ow," Thomson added after reading the first and last lines in an attempt to get the gist of whatever the article, review, or possibly recipe was about.\r\n\r\n' +
      'At 3:16 p.m., a deafening sigh was heard across the country as the nation grappled with the daunting cascade of syllables, whose unfamiliar letter-upon-letter structure stretched on for an endless 500 words. Children wailed for the attention of their bewildered parents, businesses were shuttered, and local governments ground to a halt as Americans scanned the text in vain for a web link to click on.\r\n\r\n' +
      'Sources also reported a 450 percent rise in temple rubbing and under-the-breath cursing around this time.\r\n\r\n' +
      '"It demands so much of my time and concentration," said Chicago resident Dale Huza, who was confronted by the confusing mound of words early Monday afternoon. "This large block of text, it expects me to figure everything out on my own, and I hate it."\r\n\r\n' +
      '"I\'ve never seen anything like it," said Mark Shelton, a high school teacher from St. Paul, MN who stared blankly at the page in front of him for several minutes before finally holding it up to his ear. "What does it want from us?"\r\n\r\n' +
      'As the public grows more desperate, scholars are working to randomly italicize different sections of the text, hoping the italics will land on the important parts and allow everyone to go on with their day. For now, though, millions of panicked and exhausted Americans continue to repetitively search the single column of print from top to bottom and right to left, looking for even the slightest semblance of meaning or perhaps a blurb.\r\n\r\n' +
      'Some have speculated that the never-ending flood of sentences may be a news article, medical study, urgent product recall notice, letter, user agreement, or even a binding contract of some kind. But until the news does a segment in which they take sections of the text and read them aloud in a slow, calm voice while highlighting those same words on the screen, no one can say for sure.\r\n\r\n' +
      'There are some, however, who remain unfazed by the virtual hailstorm of alternating consonants and vowels, and are determined to ignore it.\r\n\r\n' +
      '"I\'m sure if it\'s important enough, they\'ll let us know some other way," Detroit local Janet\r\n\r\n' +
      ' Landsman said. "After all, it can\'t be that serious. If there were anything worthwhile buried deep in that block of impenetrable English, it would at least have an accompanying photo of a celebrity or a large humorous title containing a pop culture reference."\r\n\r\n' +
      'Added Landsman, "Whatever it is, I\'m pretty sure it doesn\'t even have a point."';
  }
});