// 트리 구조의 자식 노드 정의
export class StackNode<T> {
  constructor(public value: T= null) {}

  public next: StackNode<T> = null;
}

// tslint:disable-next-line: max-classes-per-file
export class Stack<T> {
  private head: StackNode<T> = null;
  private tail: StackNode<T> = null;
  private size: number = 0;

  // 크기 구하는 메소드
  getSize(): number {
    console.log(`current size is ${this.size}`)
    return this.size;
  }

  // 물건 추가 메소드
  push(value: T): void {
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

  // 물건 삭제 메소드(FIFO)
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

  // 특정 물건의 이름으로 인덱스 찾는 메소드
  searchIdxByName(name: T): number {
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

  // 해당 위치 인덱스에 있는 물건 이름 찾는 메소드
  searchNameByIdx(index: number): T {
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

const stack = new Stack<number>();

for (const key in Stack.prototype) {
  console.log(key);
}

// stack.push(123);
// stack.getSize();
// stack.push(442);
// stack.getSize();
// stack.push(5155);
// stack.getSize();
// stack.push(666346);
// stack.getSize();
// stack.searchIdxByName(123)
// stack.searchIdxByName(5155)
// stack.searchNameByIdx(1);
// stack.searchNameByIdx(0)
// stack.pop();
// stack.getSize();
// stack.pop();
// stack.getSize();
// stack.pop();
// stack.getSize();
// stack.pop();
// stack.getSize();