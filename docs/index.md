---
title: feed-view documentation
description: Documentation for the feed-view library
---

You've created an chat an and you want to add simple chat like scroll behaviour:

[Example chat view](./chat.png)

You can use this simple 1kb module to manage scroll behaviour for you. This module works for any html container that receives new children dynamically. If the scrolled all the way to the bottom, the bottom will stick. When new elements are added on above the current scroll view, this module will maintain the right amount of scroll.

## Installation

### Node

```bash
npm i -S feed-view
```

```javascript
const FeedView = require('feed-view');
// or
import FeedView from 'feed-view'; // if you're using es6
```

### Browser

CDN: https://cdn.jsdelivr.net/npm/feed-view/dist/feed-view.min.js

```html
<script src="https://cdn.jsdelivr.net/npm/feed-view/dist/feed-view.min.js"></script>
<script>
  // "FeedView" is now a global variable
</script>
```
