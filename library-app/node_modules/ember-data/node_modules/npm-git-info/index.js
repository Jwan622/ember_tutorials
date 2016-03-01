var proto = {
  isInstalledAsNpmPackage: function() {
    return !!this.sha;
  },
  hasVersionInRef: function() {
    return !!(this.ref && this.ref.indexOf(this.version) >= 0);
  }
};

module.exports = function npmGitInfo(package) {
  var info = Object.create(proto);

  info.name = package.name;
  info.version = package.version;
  info.sha = package.gitHead;
  info.abbreviatedSha = package.gitHead && package.gitHead.slice(0, 10);
  info.ref = (package._from || '').split('#')[1];

  return info;
};
