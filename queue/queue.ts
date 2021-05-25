class QueueNode {
  constructor(public value: string = null) {}

  public prev: QueueNode = null;
}

// tslint:disable-next-line: max-classes-per-file
class Queue {
  private head: QueueNode = null;
  private tail: QueueNode = null;
  private size: number = 0;

  getSize(): number {
    console.log(`current size is ${this.size}`)
    return this.size;
  }

  push(value: string): void {
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

  searchIdxByName(name: string): number {
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
      return
    }
  }

  searchNameByIdx(index: number): string {
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

queue.push('test1');
queue.getSize();
queue.push('test2');
queue.getSize();
queue.push('test3');
queue.getSize();
queue.push('test4');
queue.getSize();
queue.searchIdxByName('test5')
queue.searchIdxByName('test4')
queue.searchNameByIdx(1);
queue.searchNameByIdx(0)
queue.pop();
queue.getSize();
queue.pop();
queue.getSize();
queue.pop();
queue.getSize();
queue.pop();
queue.getSize();