import { InterfaceList } from './interface';
import { LinkedListNode } from './LinkedListNode';

export class LinkedList<T> implements InterfaceList.ILinkedList<T> {

  private _length: number = 0

  private _head: LinkedListNode<T> | null = null

  private _tail: LinkedListNode<T> | null = null

  public get length() {
    return this._length;
  }

  public add(value: T): void {
    const node: LinkedListNode<T> = new LinkedListNode<T>(value);

    if (this._head === null) {
      this._head = node;
      this._tail = node;
    } else {
      if (this._tail) {
        this._tail.next = node;
        this._tail = node;
      }
    }

    this._length++;
  }

  public remove(value: T): boolean {
    if (this._head === null) {
      return false;
    }

    let current: LinkedListNode<T> | null = this._head;
    let previous: LinkedListNode<T> | null = null;
    let iterator: Iterator<T> = this[Symbol.iterator]();

    while (true) {
      let result = iterator.next();
      if (result.done) break;

      if (current && current.value === value) {

        if (previous === null) {
          this._head = this._head.next;

          if (this._head === null) {
            this._tail = null;
          }
        } else {
          previous.next = current.next;

          if (current.next === null) {
            this._tail = previous;
          }
        }

        this._length--;
        return true;
      }

      previous = current;
      current = current && current.next;
    }

    return false;
  }

  public contains(value: T): boolean {
    let current: LinkedListNode<T> | null = this._head;
    let iterator: Iterator<T> = this[Symbol.iterator]();

    while (true) {
      let result = iterator.next();
      if (result.done) break;

      if (current && current.value === value) {
        return true;
      }

      current = current && current.next;
    }

    return false;
  }

  public copyToArray(targetArray: T[], index?: number): T[] {
    let array: Array<T> = Array.from(this);

    if (index) {
      array = array.slice(index);
    } else {
      array = array.slice(0);
    }

    return targetArray.concat(array);
  }

  public clear(): void {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  [Symbol.iterator]() {
    let current: LinkedListNode<T> | null = this._head;

    return {
      next(): IteratorResult<T> {

        if (current !== null) {
          let value: T = current.value;
          current = current.next;

          return {
            done: false,
            value
          }
        }

        return <IteratorResult<any>> { done: true, value: undefined }
      }
    }
  }

  public static fromArray<U>(array: Array<U>): LinkedList<U>  {
    let instance: LinkedList<U> = new LinkedList<U>();

    for (let item of array) {
      instance.add(item);
    }

    return instance;
  }

  public static fromArrayRevers<U>(array: Array<U>): LinkedList<U>  {
    let instance: LinkedList<U> = new LinkedList<U>();

    for (let i = array.length - 1; i >= 0; i--) {
      instance.add(array[i]);
    }

    return instance;
  }

};
