---
id: "1"
path: "/common-day"
titleid: "common-day"
date: "2017-07-12T17:12:33.962Z"
title: "Practical Parallelization in C# with MapReduce, ProducerConsumer and ActorModel"
tags: ['navidad', 'blog', 'cool']
excerpt: "The barrier of entry into multi-threading in .NET is relatively low as both Parallel Computing (making programs run faster) and Concurrent Programming (making programs more responsive)"
author: "Hans Garcia"
---

##a common day , today
Per MDN, the fetch() API only rejects a promise when a “network error is encountered, although this usually means permissions issues or similar.” Basically fetch() will only reject a promise if the user is offline, or some unlikely networking error occurs, such a DNS lookup failure.

The good is news is fetch provides a simple ok flag that indicates whether an HTTP response’s status code is in the successful range or not. For instance the following code logs “Error: Internal Server Error(…)”:

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

Although I still don’t like fetch()’s lack of rejecting failed HTTP status codes, [I'm an inline-style link with title](https://www.google.com "Google's Homepage") over time fetch()’s behavior has grown on me—mostly because it gives me more control over how I handle individual problems. Plus, the composable nature of fetch() makes it fairly trivial to manually handle errors without adding a bunch of verbose code.

Overall I think it’s worth taking few minutes to play with fetch(), even if it’s just to see what you think. It’s certainly a far more readable alternative to XMLHttpRequest. If you happen to be building NativeScript apps, you might not know that you can use fetch() today without any need for a polyfill or fallback. And something about using fetch() to perform HTTP requests in native Android and iOS apps is just plain cool :)

