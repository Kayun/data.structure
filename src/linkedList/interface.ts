import { Type } from '../common/type';

export namespace InterfaceList {

  export interface ILinkedListNode<T> {
    value: T;
    next: ILinkedListNode<T> | null;
    prev?: ILinkedListNode<T> | null;
  };

  export interface ILinkedList<T> extends Iterable<T> {
    add(value: T): void;
    remove(value: T): boolean;
    contains(value: T): boolean;
    clear(): void;
    copyToArray(targetArray: T[], index?: number): T[];
    readonly length: number;
  };
}


