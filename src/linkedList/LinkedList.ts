import { InterfaceList } from './interface';
import { Type } from './type';
import { List } from './List';
import { LinkedListNode } from './LinkedListNode';

export class LinkedList<T> extends List<T> implements InterfaceList.ILinkedList<T> {

  protected _head: LinkedListNode<T> | null = null;

  protected _tail: LinkedListNode<T> | null = null;

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

  public static fromArray<U>(array: Array<U>): LinkedList<U> {
    return this._fromArray<LinkedList<U>, U>(array, LinkedList);
  }

  public static fromArrayRevers<U>(array: Array<U>): LinkedList<U> {
    return this._fromArrayRevers<LinkedList<U>, U>(array, LinkedList);
  }

};
