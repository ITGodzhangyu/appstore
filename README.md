# vueAdmin-template

> A minimal vue admin template with Element UI & axios & iconfont & permission control & lint

**Live demo:** http://panjiachen.github.io/vueAdmin-template

[中文文档](https://github.com/PanJiaChen/vueAdmin-template/blob/master/README-zh.md)

## Build Setup

``` bash

# Clone project
git clone https://github.com/ITGodzhangyu/appstore.git

# Install dependencies
npm install

# serve with hot reload at localhost:9528
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Demo


## Extra

## Related Project
 [appstore](https://github.com/ITGodzhangyu/appstore.git)

 [appstore](https://github.com/ITGodzhangyu/appstore.git)

### Element-Ui using cdn tutorial

Import css and js of `Element`, and then import vue. Because `Element` is vue-dependent, vue must be import before it.

Add `externals` to make webpack not package vue and element.

```
externals: {
  vue: 'Vue',
  'element-ui':'ELEMENT'
}
```

And you can use `npm run build --report` to see the effect

Pictured:

## License

Copyright (c) 2017-present PanJiaChen
