import { InterfaceList } from './interface';
import { LinkedList } from './LinkedList';
import { LinkedListNode, DoublyLinkedListNode } from './LinkedListNode';
import { DoublyLinkedList } from './DoublyLinkedList'

export namespace Type {
  export type List<T> = LinkedList<T> | DoublyLinkedList<T>;
  export type ListNode<T> = LinkedListNode<T> | DoublyLinkedListNode<T>;
}
