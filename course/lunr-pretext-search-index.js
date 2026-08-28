var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "schedule",
  "level": "1",
  "url": "schedule.html",
  "type": "Section",
  "number": "",
  "title": "Schedule of topics",
  "body": " Schedule of topics  This schedule is tentative. We might move things around according to people's needs.    Date  Topics    Sep 3   Terms and factors!  The equals sign means two things are the same!     Sep 10   The many meanings of letters!  Variables, constants, parameters, and other tricks!     Sep 17    Lines and linear equations!  Slope-intercept and point-slope form!     Sep 24   Rules of exponents!  Adding, multiplying, and fractions!     Oct 1   Logarithms!  (The worst name in mathematics!)     Oct 8   Fractions and percents!  Numerators, denominators, and canceling !     Oct 15   Substitution:  Replacing something with another thing that's the same!     Oct 22  Fall break!    Oct 29     Nov 5     Nov 12     Nov 19     Nov 26  Thanksgiving!    Dec 3     Dec 10     Dec 17     "
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
