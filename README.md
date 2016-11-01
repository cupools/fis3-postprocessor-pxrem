# fis3-postprocessor-pxrem
> Transforming css from px to rem, base on [pxrem](https://github.com/cupools/pxrem)

## Todo

- [ ] Test coverage
- [ ] Examples
- [ ] 中文文档
- [ ] Publish to npm

## Getting started

```bash
$ npm i -D cupools/fis3-postprocessor-pxrem
```

## Usage

```js
fis.match('*.css', {
  postprocessor: fis.plugin('pxrem', {
    root: 75,
    filter: /^border/,
    fixed: 6,
    keepPx: false,
    commentFilter: 'no'
  })
})
```

## Options

- root: root value from px to rem, default to 75
- filter: css declaration that should be ignored, can be regexp or function, default to null
- fixed: precision of rem value, default to 6
- keepPx: keep px for compatible in old browsers, default to false
- commentFilter: comment after css declaration that should be ignored, default to 'no'

## Examples

#### 1. basic

```js
fis.match('*.css', {
  postprocessor: fis.plugin('pxrem', {
    root: 75,
    filter: /^border/,
    fixed: 6,
    keepPx: false,
    commentFilter: 'no'
  })
})
```

```css
/* before */
.foo {
  margin: 15px auto;
  width: 15px;
  height: 75px;
  font-size: 24px; /*no*/
  border: 1px solid #000;
}
/* after */
.foo {
  margin: 0.2rem auto;
  width: 0.2rem;
  height: 1rem;
  font-size: 24px;
  border: 1px solid #000;
}
```

#### 2. filter by function

```js
fis.match('*.css', {
  postprocessor: fis.plugin('pxrem', {
    root: 75,
    filter: function(prop, val, decl) {
      return prop === 'border' && val === '1px'
    }
  })
})
```

```css
/* before */
.foo {
  margin: 15px auto;
  width: 15px;
  height: 75px;
  font-size: 24px; /*no*/
  border: 1px solid #000;
}
/* after */
.foo {
  margin: 0.2rem auto;
  width: 0.2rem;
  height: 1rem;
  font-size: 24px;
  border: 1px solid #000;
}
```

#### 3. keep px for IE

```js
fis.match('*.css', {
  postprocessor: fis.plugin('pxrem', {
    root: 75,
    filter: /^border/,
    keepPx: true
  })
})
```

```css
/* before */
.foo {
  margin: 15px auto;
  width: 15px;
  height: 75px;
  font-size: 24px; /*no*/
  border: 1px solid #000;
}
/* after */
.foo {
  margin: 15px auto;
  margin: 0.2rem auto;
  width: 15px;
  width: 0.2rem;
  height: 75px;
  height: 1rem;
  font-size: 24px;
  border: 1px solid #000;
}
```
