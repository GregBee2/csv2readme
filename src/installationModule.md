## Installation

If you use [NPM](https://www.npmjs.com/), you can install the module via `npm install ${moduleName}`. Otherwise, you can download the latest [minified file](${moduleUrl}). Be aware any dependencies are not installed by default; you should consider downloading them yourself.
If you want, you can install the complete library from github [${libraryName}](${libraryUrl}), this includes all dependencies you may need.

The module uses [UMD](https://github.com/umdjs/umd) and supports [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) and vanilla environments. Using vanilla: the `xa`global is exported:

```html
<script>
xa.${moduleTest}
</script>
```

