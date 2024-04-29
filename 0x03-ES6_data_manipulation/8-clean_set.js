function cleanSet(set, string) {
  if (!string || !string.length) return '';
  let filteredValues = '';
  for (const value of set) {
    if (value && value.startsWith(string)) {
      filteredValues += filteredValues.length === 0 ? value.replace(string, '') : value.replace(string, '-');
    }
  }

  return filteredValues;
}
export default cleanSet;
