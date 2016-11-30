import { InterfaceList } from './interface';
import { Type } from './type';

export abstract class List<T> {

  protected _length: number = 0

  protected _head: Type.ListNode<T> | null

  protected _tail: Type.ListNode<T> | null

  public get length() {
    return this._length;
  }

  public clear(): void {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  public copyToArray(targetArray: Array<T>, index?: number): Array<T> {
    let array: Array<T> = Array.from(this);

    if (index) {
      array = array.slice(index);
    } else {
      array = array.slice(0);
    }

    return targetArray.concat(array);
  }

  [Symbol.iterator]() {
    let current: Type.ListNode<T> | null = this._head;

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

  protected static _fromArray<I extends Type.List<U>, U>(array: Array<U>, cls: InterfaceList.IListConstructor<I>): I {
    let instance: I = new cls();

    for (let item of array) {
      instance.add(item);
    }

    return instance;
  }

  protected static _fromArrayRevers<I extends Type.List<U>, U>(array: Array<U>, cls: InterfaceList.IListConstructor<I>): I {
    let instance: I = new cls();

    for (let i = array.length - 1; i >= 0; i--) {
      instance.add(array[i]);
    }

    return instance;
  }
}
