# Wisdom Cow

The Wisdom Cow will always find an inspirational quote for you.

## CLI usage

#### Global install

```bash
npm install -g wisdom-cow
```

#### Example

```
wisdom-cow

 ____________________________________________________________
/ To be wrong is nothing unless you continue to remember it. \
|                                                            |
\ Confucius.                                                 /
 ------------------------------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## Project usage

#### Local install

```bash
npm install wisdom-cow
```

#### Example

```js
// Option 1 : ESM import
import { wisdomCowSays } from "wisdom-cow";

// Option 2 : CJS import
const { wisdomCowSays } = require("wisdom-cow");

// Have fun !
console.log(wisdomCowSays());
```
