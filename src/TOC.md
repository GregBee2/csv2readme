# xassist
Several helper functions for Array's, objects, events, Dates, ...
## Installation

If you use [NPM](https://www.npmjs.com/), you can install the module via `npm install xassist`. Otherwise, you can download the latest [minified file](https://raw.githubusercontent.com/GregBee2/xassist/master/dist/xAssist.min.js). Be aware any dependencies are not installed by default; you should consider downloading them yourself.
If you want, you can install the complete library from github [xassist](https://github.com/GregBee2/xassist), this includes all dependencies you may need.

The module uses [UMD](https://github.com/umdjs/umd) and supports [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) and vanilla environments. Using vanilla: the `xa`global is exported:

```html
<script>
xa.version()
</script>
```



## API
- [**xassist-object**](https://github.com/GregBee2/xassist-object)
  - [object()](https://github.com/GregBee2/xassist-object#undefined)
  - [object().onChange()](https://github.com/GregBee2/xassist-object#undefined)
  - [object().clone()](https://github.com/GregBee2/xassist-object#undefined)
  - [object().assign()](https://github.com/GregBee2/xassist-object#undefined)
  - [object().mergeUnique()](https://github.com/GregBee2/xassist-object#undefined)
  - [object().toArray()](https://github.com/GregBee2/xassist-object#undefined)
  - [object().toMapArray()](https://github.com/GregBee2/xassist-object#undefined)
  - [object().forEach()](https://github.com/GregBee2/xassist-object#undefined)
  - [object().map()](https://github.com/GregBee2/xassist-object#undefined)
- [**xassist-csv**](https://github.com/GregBee2/xassist-csv)
  - [csv()](https://github.com/GregBee2/xassist-csv#undefined)
  - [csv().toArray()](https://github.com/GregBee2/xassist-csv#undefined)
  - [csv().toObject()](https://github.com/GregBee2/xassist-csv#undefined)
  - [csv().fromArray()](https://github.com/GregBee2/xassist-csv#undefined)
  - [csv().fromObject()](https://github.com/GregBee2/xassist-csv#undefined)
- [**xassist-array**](https://github.com/GregBee2/xassist-array)
  - [array()](https://github.com/GregBee2/xassist-array#undefined)
  - [array().pushUnique()](https://github.com/GregBee2/xassist-array#undefined)
  - [array().groupSequence()](https://github.com/GregBee2/xassist-array#undefined)
  - [array().replaceNull()](https://github.com/GregBee2/xassist-array#undefined)
- [**xassist-eventdispatcher**](https://github.com/GregBee2/xassist-eventdispatcher)
  - [EventDispatcher()](https://github.com/GregBee2/xassist-eventdispatcher#undefined)
  - [EventDispatcher().registerEvent()](https://github.com/GregBee2/xassist-eventdispatcher#undefined)
  - [EventDispatcher().hasEvent()](https://github.com/GregBee2/xassist-eventdispatcher#undefined)
  - [EventDispatcher().on()](https://github.com/GregBee2/xassist-eventdispatcher#undefined)
  - [EventDispatcher().once()](https://github.com/GregBee2/xassist-eventdispatcher#undefined)
  - [EventDispatcher().off()](https://github.com/GregBee2/xassist-eventdispatcher#undefined)
  - [EventDispatcher().fire()](https://github.com/GregBee2/xassist-eventdispatcher#undefined)
- [**xassist-main**](https://github.com/GregBee2/xassist-main)
  - [id()](https://github.com/GregBee2/xassist-main#undefined)
  - [ready()](https://github.com/GregBee2/xassist-main#undefined)
  - [template()](https://github.com/GregBee2/xassist-main#undefined)
## Dependencies
- [@xassist/xassist-array](https://github.com/GregBee2/xassist-array#readme): helper functions for javascript arrays
- [@xassist/xassist-csv](https://github.com/GregBee2/xassist-csv#readme): load csv files from remote and create csv files
## License

This module is licensed under the terms of [GPL-3.0](https://choosealicense.com/licenses/gpl-3.0).
