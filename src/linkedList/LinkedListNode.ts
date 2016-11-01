import { Interface } from 'common/interface';

export class LinkedListNode<T> implements Interface.ILinkedListNode<T> {

  constructor(public value: T) {}

  public next: LinkedListNode<T> | null = null

};

export class DoublyLinkedListNode<T> extends LinkedListNode<T> {

  public prev: LinkedListNode<T> | null = null

};
