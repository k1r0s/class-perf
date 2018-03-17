### usage

```javascript

import { startPerformance, endPerformance } from "class-perf";

class AnyClass {

  @startPerformance()
  someMethod() {

    // ...stuff
  }

  @endPerformance()
  anotherMethod() {

    // ...more stuff
  }

}

// when called logs
//
// PERF: Measure on AnyClass took <number> ms

```

### Custom milestones

By default class-perf decorators will retrieve class name by accessing constructor name, but if you provide a string as a parameter for decorators then message will be build using it instead of class name. For instance `@startPerformance("something")` and `@endPerformance("something")`.

> Note that strings should be the same to allow proper measurement

> TIP: `startPerformance` will be evaluated before decorated method will be executed and `endPerformance` will evaluate after decorated method has been executed
