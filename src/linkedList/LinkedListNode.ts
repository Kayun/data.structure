import { InterfaceList } from './interface';

export class LinkedListNode<T> implements InterfaceList.ILinkedListNode<T> {

  constructor(public value: T) {}

  public next: LinkedListNode<T> | null = null

};

export class DoublyLinkedListNode<T> implements InterfaceList.ILinkedListNode<T> {

  constructor(public value: T) {}

  public next: DoublyLinkedListNode<T> | null = null

  public prev: DoublyLinkedListNode<T> | null = null

};
