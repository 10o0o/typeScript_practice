class StackNode {
  constructor(public value: string = null) {}

  public next: StackNode = null;
}

// tslint:disable-next-line: max-classes-per-file
class Stack {
  private head: StackNode = null;
  private tail: StackNode = null;
  private size: number = 0;

  getSize(): number {
    console.log(`current size is ${this.size}`)
    return this.size;
  }

  push(value: string): void {
    const newStackNode = new StackNode(value);
    if (!this.tail) {
      this.head = newStackNode;
      this.tail = newStackNode;
    } else {
      newStackNode.next = this.head;
      this.head = newStackNode;
    }
    this.size++;
    console.log(`${value} 추가 완료`);
  }

  pop(): void {
    if (!this.tail) {
      console.log(`empty stack!`);
      return;
    } else if (this.tail === this.head) {
      const poppedItem = this.head;
      this.head = null;
      this.tail = null;
      console.log(`pop is ok, ${poppedItem.value} is removed, stack is currently empty.`)
    } else {
      const poppedItem = this.head;
      this.head = this.head.next;
      console.log(`pop is ok, ${poppedItem.value} is removed`)
    }
    this.size--;
  }

  searchIdxByName(name: string): number {
    if (!this.tail) {
      console.log(`empty stack!`);
      return;
    } else {
      let idx = 0;
      let head = this.head;
      if (head.value === name) {
        console.log(`your node index is here, ${idx}`)
        return idx;
      }

      while(head.next) {
        idx++;
        if(head.next.value === name) {
          console.log(`your node index is here, ${idx}`)
          return idx;
        }
        head = head.next;
      }

      console.log(`there is no ${name} in this stack`)
      return
    }
  }

  searchNameByIdx(index: number): string {
    if (!this.tail || index > this.size - 1) {
      console.log(`empty stack or input idx is bigger than stack length`);
      return;
    } else {
      let curIdx = 0;
      let head = this.head;

      while(curIdx !== index) {
        head = head.next;
        curIdx++;
      }

      console.log(`your stuff is here, ${head.value}`);
      return head.value;
    }
  }
}

const stack = new Stack();

stack.push('test1');
stack.getSize();
stack.push('test2');
stack.getSize();
stack.push('test3');
stack.getSize();
stack.push('test4');
stack.getSize();
stack.searchIdxByName('test5')
stack.searchIdxByName('test4')
stack.searchNameByIdx(1);
stack.searchNameByIdx(0)
stack.pop();
stack.getSize();
stack.pop();
stack.getSize();
stack.pop();
stack.getSize();
stack.pop();
stack.getSize();