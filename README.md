[![npm](https://img.shields.io/npm/v/data.structure.svg)](https://www.npmjs.com/package/data.structure)
[![npm](https://img.shields.io/npm/dt/data.structure.svg)](https://www.npmjs.com/package/data.structure)
[![npm](https://img.shields.io/npm/v/typescript.svg)](https://www.npmjs.com/package/typescript)

# data.structure
Implementation of the basic structures of the language TypeScript

#Installation
### Prerequisites
*data.structure* require TypeScript 2 or higher.

### Install
```$xslt
npm install data.structure --save-dev
```
#Usage
```javascript
import * as DS from 'data.structure'; // import of all structures
let numberList: DS.DoublyLinkedList<string> = new DS.DoublyLinkedList<string>();
  
import { LinkedList, DoublyLinkedList } from 'data.structure/src/linked-list'; // import lists
let numberList: LinkedList<number> = new LinkedList<number>();
  
numberList.add(123);
```

#Documentation
Description of the basic methods and properties provided by structures.
  
- [LinkedList](https://github.com/Kayun/data.structure/wiki/LinkedList)
