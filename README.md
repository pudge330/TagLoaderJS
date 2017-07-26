# TagLoaderJS
Store and retrieve JSON data live within the current document. Great for SPA (Single Page Application) or short term caching.

* Only 1.25 kb minified
* No Dependencies
* Works with or without jQuery
* Simple and easy to use

## Getting Started
Download and include `TagLoader.min.js` in your page.

```html
<script src="/scripts/TagLoader.min.js" type="text/javascript"></script>
```

## Use

#### TagLoader.setJson(_elm, _obj)

```javascript
//--by id
//--if the element doesn't exists it'll be automatically created
TagLoader.setJson('myElement', {name: "TagLoader"}); //--or #myElement

//--by Element
//--Element is expected to be a script tag with type="application/json"
TagLoader.setJson(document.getElementById('myElement'), {name: "TagLoader"});

//--by jQuery
//--the jQuery object is expected to be a script tag with type="application/json"
TagLoader.setJson(jQuery('#myElement'), {name: "TagLoader"});
```

#### TagLoader.getJson(_elm)

```javascript
//--by id
console.log(TagLoader.getJson('myElement')); //--or #myElement

//--by Element
console.log(TagLoader.getJson(document.getElementById('myElement')));

//--by jQuery
console.log(TagLoader.getJson(jQuery('#myElement')));
```

### Outputting JSON for use with TagLoader
Format:

```html
<script id="myElement" type="application/json"><!--{name:"TagLoader"}--></script>
```

## Functions

**getJson(_elm)** - Gets a value
  * ___elm__ - An element id (#myElement or myElement), a [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) object or a jQuery object.

**setJson(_elm, _obj)** - Creates or updates a value
  * ___elm__ - An element id (#myElement or myElement), a [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) object or a jQuery object.
  * ___obj__ - Data to be stored as a JSON string

**getText(_elm)** - Gets a value
  * ___elm__ - An element id (#myElement or myElement), a [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) object or a jQuery object.

**setText(_elm, _text)** - Creates or updates a value
  * ___elm__ - An element id (#myElement or myElement), a [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) object or a jQuery object.
  * ___text__ - Text to be stored in tag

**applyWrap(_text)** - Applies html style comments to data, useful for older browsers
  * ___text__ - Text to be wrapped

**removeWrap(_text)** - Removes html style comments from data
  * ___text__ - Text to be wrapped

## Polyfills

**String.trim()** - Trims extra whitespace

**window.isObject(val)** - Determines if value is object

**JSON.safeParse(_json)** - Safe JSON.parse() alternative, falls back to `null` on error