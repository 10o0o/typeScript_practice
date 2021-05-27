// 트리 구조의 자식 노드 정의
class StackNode {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}
// tslint:disable-next-line: max-classes-per-file
class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // 크기 구하는 메소드
    getSize() {
        console.log(`current size is ${this.size}`);
        return this.size;
    }
    // 물건 추가 메소드
    push(value) {
        const newStackNode = new StackNode(value);
        if (!this.tail) {
            this.head = newStackNode;
            this.tail = newStackNode;
        }
        else {
            newStackNode.next = this.head;
            this.head = newStackNode;
        }
        this.size++;
        console.log(`${value} 추가 완료`);
    }
    // 물건 삭제 메소드(FIFO)
    pop() {
        if (!this.tail) {
            console.log(`empty stack!`);
            return;
        }
        else if (this.tail === this.head) {
            const poppedItem = this.head;
            this.head = null;
            this.tail = null;
            console.log(`pop is ok, ${poppedItem.value} is removed, stack is currently empty.`);
        }
        else {
            const poppedItem = this.head;
            this.head = this.head.next;
            console.log(`pop is ok, ${poppedItem.value} is removed`);
        }
        this.size--;
    }
    // 특정 물건의 이름으로 인덱스 찾는 메소드
    searchIdxByName(name) {
        if (!this.tail) {
            console.log(`empty stack!`);
            return;
        }
        else {
            let idx = 0;
            let head = this.head;
            if (head.value === name) {
                console.log(`your node index is here, ${idx}`);
                return idx;
            }
            while (head.next) {
                idx++;
                if (head.next.value === name) {
                    console.log(`your node index is here, ${idx}`);
                    return idx;
                }
                head = head.next;
            }
            console.log(`there is no ${name} in this stack`);
            return;
        }
    }
    // 해당 위치 인덱스에 있는 물건 이름 찾는 메소드
    searchNameByIdx(index) {
        if (!this.tail || index > this.size - 1) {
            console.log(`empty stack or input idx is bigger than stack length`);
            return;
        }
        else {
            let curIdx = 0;
            let head = this.head;
            while (curIdx !== index) {
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
stack.searchIdxByName('test5');
stack.searchIdxByName('test4');
stack.searchNameByIdx(1);
stack.searchNameByIdx(0);
stack.pop();
stack.getSize();
stack.pop();
stack.getSize();
stack.pop();
stack.getSize();
stack.pop();
stack.getSize();
