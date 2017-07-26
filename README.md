# TagLoaderJS
Store and retrieve JSON data live within the document. Great for SPA (Single Page Application) or short term caching.

* No Dependencies
* Works with or without jQuery
* Built-in caching
* Simple and easy to use

## Getting Started
Download and include `TagLoader.js` in your page.

```html
<script src="/scripts/TagLoader.js" type="text/javascript"></script>
```

## Use

#### TagLoader.getJson(_elm, _obj)

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