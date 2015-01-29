# require-optional [![Build Status][travis-image]][travis-url]

Optionally require modules

## Usage

Install via npm:

```bash
$ npm install require-optional
```

Boilerplate atop the Javascript:

```javascript
var requireOptional = require('require-optional')(require)
/* `require-optional` needs to bind to the correct relative path, hence the extra (require) */
```

Use as you'd expect:

```javascript
var optDep = requireOptional('dep')
if (optDep) {
  /* do stuff with optDep */
}
```

`require-optional` can also return a default value:

```javascript
var optDep = requireOptional('dep', function(){})
optDep('processing')
```

[travis-image]: https://img.shields.io/travis/fengb/require-optional.svg?style=flat
[travis-url]: https://travis-ci.org/fengb/require-optional
