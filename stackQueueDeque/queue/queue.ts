// 트리 구조의 자식 노드 정의
export class QueueNode<T> {
  constructor(public value: T = null) {}

  public prev: QueueNode<T> = null;
}

// tslint:disable-next-line: max-classes-per-file
export class Queue<T> {
  private head: QueueNode<T> = null;
  private tail: QueueNode<T> = null;
  private size: number = 0;

  // 크기 구하는 메소드
  getSize(): number {
    console.log(`current size is ${this.size}`)
    return this.size;
  }

  // 물건 추가 메소드
  push(value: T): void {
    const newOneNode = new QueueNode(value);
    if (!this.tail) {
      this.head = newOneNode;
      this.tail = newOneNode;
    } else {
      this.head.prev = newOneNode;
      this.head = newOneNode;
    }
    this.size++;
    console.log(`${value} 추가 완료`);
  }

  // 물건 삭제 메소드(LIFO)
  pop(): void {
    if (!this.tail) {
      console.log(`empty queue!`);
      return;
    } else if (this.tail === this.head) {
      const poppedItem = this.head;
      this.head = null;
      this.tail = null;
      console.log(`pop is ok, ${poppedItem.value} is removed, queue is currently empty.`)
    } else {
      const poppedItem = this.tail;
      this.tail = this.tail.prev;
      console.log(`pop is ok, ${poppedItem.value} is removed`)
    }
    this.size--;
  }

  // 특정 물건의 이름으로 인덱스 찾는 메소드
  searchIdxByName(name: T): number {
    if (!this.tail) {
      console.log(`empty queue!`);
      return;
    } else {
      let idx = this.size - 1;
      let tail = this.tail;
      if (tail.value === name) {
        console.log(`your node index is here, ${idx}`)
        return idx;
      }

      while(tail.prev) {
        idx--;
        if(tail.prev.value === name) {
          console.log(`your node index is here, ${idx}`)
          return idx;
        }
        tail = tail.prev;
      }

      console.log(`there is no ${name} in this queue`)
      return;
    }
  }

  // 해당 위치 인덱스에 있는 물건 이름 찾는 메소드
  searchNameByIdx(index: number): T {
    if (!this.tail || index > this.size - 1) {
      console.log(`empty queue or input idx is bigger than queue length`);
      return;
    } else {
      let curIdx = this.size - 1;
      let tail = this.tail;

      while(curIdx !== index) {
        tail = tail.prev;
        curIdx--;
      }

      console.log(`your stuff is here, ${tail.value}`);
      return tail.value;
    }
  }
}

const queue = new Queue();

// queue.push('test1');
// queue.getSize();
// queue.push('test2');
// queue.getSize();
// queue.push('test3');
// queue.getSize();
// queue.push('test4');
// queue.getSize();
// queue.searchIdxByName('test5')
// queue.searchIdxByName('test4')
// queue.searchNameByIdx(1);
// queue.searchNameByIdx(0)
// queue.pop();
// queue.getSize();
// queue.pop();
// queue.getSize();
// queue.pop();
// queue.getSize();
// queue.pop();
// queue.getSize();