export const getEntryVersionNumber = (entryString: string) => {
  entryString = entryString.replace(/\([^\)]+\)/, '');
  let matches = entryString.match(/[\d]+/);
  // If the renderer did not contain any numbers, match letters
  if (!matches) {
    matches = entryString.match(/(\W|^)([a-zA-Z]{1,3})(\W|$)/g);
  }
  // Remove any non word characters and also remove 'amd' which could be matched
  // in the clause above
  return matches ? matches.join('').replace(/\W|amd/g, '') : '';
};
