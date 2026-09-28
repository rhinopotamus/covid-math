var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "schedule",
  "level": "1",
  "url": "schedule.html",
  "type": "Section",
  "number": "",
  "title": "Schedule of topics",
  "body": " Schedule of topics  This schedule is tentative. We might move things around according to people's needs.    Date  Topics     Sep 17    Lines and linear equations!  Slope-intercept and point-slope form!     Sep 24   Terms and factors!  The equals sign means two things are the same!     Oct 1    Rules of exponents!   Adding, multiplying, and fractions!     Oct 8   Logarithms!  (The worst name in mathematics!)     Oct 15   Fractions and percents!  Numerators, denominators, and canceling !     Oct 22  Fall break!    Oct 29   Substitution:  Replacing something with another thing that's the same!     Nov 5     Nov 12     Nov 19     Nov 26  Thanksgiving!    Dec 3     Dec 10     Dec 17     "
},
{
  "id": "sec-Exponents",
  "level": "1",
  "url": "sec-Exponents.html",
  "type": "Section",
  "number": "",
  "title": "Exponents",
  "body": " Exponents   Rules of Exponents Activity    The following is a summary list of all the rules of exponents that we've talked about today. Your job is to write a human-words sentence about each one. I'll give you the first one as an example.       In human words: when you multiply two powers of the same base, the exponents add.                                                      "
},
{
  "id": "exponents-worksheet-3",
  "level": "2",
  "url": "sec-Exponents.html#exponents-worksheet-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "   In human words: when you multiply two powers of the same base, the exponents add.   "
},
{
  "id": "exponents-worksheet-4",
  "level": "2",
  "url": "sec-Exponents.html#exponents-worksheet-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "exponents-worksheet-5",
  "level": "2",
  "url": "sec-Exponents.html#exponents-worksheet-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "      "
},
{
  "id": "exponents-worksheet-6",
  "level": "2",
  "url": "sec-Exponents.html#exponents-worksheet-6",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "      "
},
{
  "id": "exponents-worksheet-7",
  "level": "2",
  "url": "sec-Exponents.html#exponents-worksheet-7",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "      "
},
{
  "id": "exponents-worksheet-8",
  "level": "2",
  "url": "sec-Exponents.html#exponents-worksheet-8",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "      "
},
{
  "id": "exponents-worksheet-9",
  "level": "2",
  "url": "sec-Exponents.html#exponents-worksheet-9",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "      "
},
{
  "id": "exponents-worksheet-10",
  "level": "2",
  "url": "sec-Exponents.html#exponents-worksheet-10",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
