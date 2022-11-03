module.exports = function (source) {
  const options = this.getOptions();

  const { startTag, endTag } = options;
  const index1 = source.indexOf(startTag);
  const index2 = source.indexOf(endTag);
  if (index1 < index2 && index1 != -1) {
    return source.slice(0, index1) + source.slice(index2 + 6);
  }
  return source;
};

