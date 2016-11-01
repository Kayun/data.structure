import { InterfaceList } from './interface';

export class LinkedListNode<T> implements InterfaceList.ILinkedListNode<T> {

  constructor(public value: T) {}

  public next: LinkedListNode<T> | null = null

};

export class DoublyLinkedListNode<T> extends LinkedListNode<T> {

  public prev: LinkedListNode<T> | null = null

};
