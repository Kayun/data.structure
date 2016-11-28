import { Type } from './type';

export namespace InterfaceList {

  export interface ILinkedListNode<T> {
    value: T;
    next: ILinkedListNode<T> | null;
    prev?: ILinkedListNode<T> | null;
  };

  export interface IList<T> {
    add(value: T): void;
    contains(value: T): boolean;
    clear(): void;
    remove(value: T): boolean;
    copyToArray(targetArray: T[], index?: number): T[];
    readonly length: number;
  }

  export interface IListConstructor<T> {
    new (): T
  }

  export interface ILinkedList<T> extends Iterable<T>, IList<T> {};

  export interface IDoublyLinkedList<T> extends Iterable<T>, IList<T> {
    addFirst(value: T): void;
    addLast(value: T): void;
    removeFirst(): boolean;
    removeLast(): boolean;
  };
}


