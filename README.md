# word count kata

Given a paragraph of text this program will determine the count of each word in the paragraph and will return the sorted word count. The following are other extrapolated rules:

* Punctuation will be ignored (although hyphenated words will not be)
* ANY whitespace will be used to delimit words

The rest of the kata applied are going to be exactly as specified in the instructions, which are as follow:

> Generate a count of the occurrences of each word for the text found in the file Paragraph.txt. Output a list of words and counts in descending count order (word with highest count listed first).
>
> Do not hesitate to search google for syntax related questions.

## Getting Started

To run the code simply:

    npm install
    npm test

Then open a browser such as chrome and navigate to the karma URL. You can also install and use PhantomJS for a headless run but I didn't go to the work of setting that up. Enjoy!

## Side Notes

All code is test driven so there is no console logging or "bootstrap" application. If you want to see this running you can load the code in your console and run `subject.getWordCount(paragraph)` on whatever text you want to see counted. Enjoy!