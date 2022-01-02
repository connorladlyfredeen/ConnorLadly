# Lap

[![hexo-image]][hexo-url]

Lap is a simple blog theme what has basic functions, it borrows styles from some bootstrap themes, but it focus on writing and communicating.

# Demo

You can preview my blog: [boseny.github.io]

## Install

```
//cd your hexo theme directory
git clone https://github.com/BosenY/Lap.git
```

## Enable

Modify `theme` setting in site's `_config.yml` to `Lap`:

```yaml
theme: Lap
```

## Plugins

I use some plugins to realize some features such as ：

1.  Site Search
2.  PWA

If you want to use, you have to install these plugins:

```
yarn add hexo-generator-search hexo-generator-searchdb // search
yarn add hexo-offline // pwa
```

## Other

You can set bgimg in current markdown:

```
#bg-img config
headerImg: /images/chunwu-bg.jpg
```

and then add bg.jpg to the source/images directory

[boseny.github.io]: https://boseny.github.io
[hexo-url]: http://hexo.io
[hexo-image]: https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg
