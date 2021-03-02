# use-path

```js
import {useLocation, usePath, navigate} from 'use-location';

// in react component
useLocation(); // /users/1
usePath(); // ['users', '1']

// anywhere
navigate('/about'); // changes location and notifies hooks
```
