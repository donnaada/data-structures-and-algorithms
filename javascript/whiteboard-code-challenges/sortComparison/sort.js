'use strict';

function sortYear(arr) {
  return arr.sort(compareYear);

}


function compareYear(a, b) {
  //comparison to sort from newest to oldest
  return b.year - a.year;
}

function sortTitle(arr) {
  return arr.sort(compareTitle);
}


function compareTitle(a, b) {
  //Compare title to sort alphabetically but exclude leading A”s, “An”s, or “The”s
  let regex = /^(?:A|The|An)\s/gm;
  let titleA = a.title.replace(regex, '');
  let titleB = b.title.replace(regex, '');

  return titleA.localeCompare(titleB);
}


module.exports = { sortYear, compareYear, sortTitle, compareTitle };
