Showdown Icon Extension
=======================
<a rel="Delivery" href="https://github.com/BCDevExchange/docs/blob/master/discussion/projectstates.md"><img alt="In production, but maybe in Alpha or Beta. Intended to persist and be supported." style="border-width:0" src="http://bcdevexchange.org/badge/3.svg" title="In production, but maybe in Alpha or Beta. Intended to persist and be supported." /></a>

Glyphicon and font-awesome support in Markdown for Showdown.js

Generates ```<span class="glyphicon glyphicon-home"></span>``` with ```[glyphicon-home]```,
and ```<i class="fa fa-home"></i>``` with ```[fa-home]```.


## Install
```bower install showdown-icon```

## Usage
```html
<script src="showdown.js" />
<script src="showdown-icon/showdown-icon.js" />
```

```js
var converter = new Showdown.converter({ extensions: ['icon'] });
alert(converter.makeHtml('[glyphicon-envelope]'));
alert(converter.makeHtml('[fa-home]'));
```
