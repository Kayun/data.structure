import { InterfaceList } from './interface';
import { DoublyLinkedListNode } from './LinkedListNode';
import { LinkedList } from './LinkedList';

export class DoublyLinkedList<T> extends LinkedList<T> implements InterfaceList.IDoublyLinkedList<T> {

  protected _head: DoublyLinkedListNode<T> | null = null;

  protected _tail: DoublyLinkedListNode<T> | null = null;

  public addFirst(value: T): void {
    let node: DoublyLinkedListNode<T> = new DoublyLinkedListNode<T>(value);
    let tempHead: DoublyLinkedListNode<T> | null = this._head;

    this._head = node;
    this._head.next = tempHead;

    if (this._tail === null) {
      this._tail = this._head;
    } else if (tempHead) {
      tempHead.prev = this._head;
    }

    this._length++;
  }

  public addLast(value: T): void {
    let node: DoublyLinkedListNode<T> = new DoublyLinkedListNode<T>(value);

    if (this._length === 0) {
      this._head = node;
    } else if (this._tail){
      this._tail.next = node;
      node.prev = this._tail;
    }

    this._tail = node;
    this._length++;
  }

  public add(value: T): void {
    this.addLast(value);
  }

  public removeFirst(): boolean {
    if (this._head !== null && this._tail !== null) {
      this._head = this._head.next;
      this._head && (this._head.prev = null);

      return true;
    }

    return false;
  }

  public removeLast(): boolean {
    if (this._head !== null && this._tail !== null) {
      this._tail = this._tail.prev;
      this._tail && (this._tail.next = null);

      return true;
    }

    return false;
  }

  public static fromArray<U>(array: Array<U>): DoublyLinkedList<U> {
    return this._fromArray<DoublyLinkedList<U>, U>(array, DoublyLinkedList);
  }

  public static fromArrayRevers<U>(array: Array<U>): DoublyLinkedList<U> {
    return this._fromArrayRevers<DoublyLinkedList<U>, U>(array, DoublyLinkedList);
  }

}
