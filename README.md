# AWS Lambda simple status

Simple utilities to check a status of AWS lambda environment.

## Disk

### `showDirectoryStatus`

It is useful when you should check a directory status such as how much space is available or what files are in there.

```javascript
import { showDirectoryStatus } from 'aws-lambda-simple-status';

showDirectoryStatus('/var/task'); // For code space.
showDirectoryStatus('/tmp'); // For temp space.
```
