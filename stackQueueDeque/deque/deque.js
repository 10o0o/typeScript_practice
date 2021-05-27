// 트리 구조의 자식 노드 정의
class DequeNode {
    constructor(value = null) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
// tslint:disable-next-line: max-classes-per-file
class Deque {
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
    // 앞에서 물건 추가 메소드
    unshift(value) {
        const newOneNode = new DequeNode(value);
        if (!this.tail) {
            this.head = newOneNode;
            this.tail = newOneNode;
        }
        else {
            this.head.prev = newOneNode;
            newOneNode.next = this.head;
            this.head = newOneNode;
        }
        this.size++;
        console.log(`앞쪽으로 ${value} 추가 완료`);
    }
    // 뒤에서 물건 추가 메소드
    push(value) {
        const newOneNode = new DequeNode(value);
        if (!this.tail) {
            this.head = newOneNode;
            this.tail = newOneNode;
        }
        else {
            this.tail.next = newOneNode;
            newOneNode.prev = this.tail;
            this.tail = newOneNode;
        }
        this.size++;
        console.log(`뒤쪽으로 ${value} 추가 완료`);
    }
    // 앞에서 물건 삭제
    shift() {
        if (!this.tail) {
            console.log(`empty Deque!`);
            return;
        }
        else if (this.tail === this.head) {
            const poppedItem = this.head;
            this.head = null;
            this.tail = null;
            console.log(`shift is ok, ${poppedItem.value} is removed, Deque is currently empty.`);
        }
        else {
            const poppedItem = this.head;
            this.head = poppedItem.next;
            console.log(`shift is ok, ${poppedItem.value} is removed`);
        }
        this.size--;
    }
    // 뒤에서 물건 삭제
    pop() {
        if (!this.tail) {
            console.log(`empty Deque!`);
            return;
        }
        else if (this.tail === this.head) {
            const poppedItem = this.head;
            this.head = null;
            this.tail = null;
            console.log(`pop is ok, ${poppedItem.value} is removed, Deque is currently empty.`);
        }
        else {
            const poppedItem = this.tail;
            this.tail = poppedItem.prev;
            console.log(`pop is ok, ${poppedItem.value} is removed`);
        }
        this.size--;
    }
    // 특정 물건의 이름으로 인덱스 찾는 메소드
    searchIdxByName(name) {
        if (!this.tail) {
            console.log(`empty Deque!`);
            return;
        }
        else {
            let idx = this.size - 1;
            let tail = this.tail;
            if (tail.value === name) {
                console.log(`your node index is here, ${idx}`);
                return idx;
            }
            while (tail.prev) {
                idx--;
                if (tail.prev.value === name) {
                    console.log(`your node index is here, ${idx}`);
                    return idx;
                }
                tail = tail.prev;
            }
            console.log(`there is no ${name} in this Deque`);
            return;
        }
    }
    // 해당 위치 인덱스에 있는 물건 이름 찾는 메소드
    searchNameByIdx(index) {
        if (!this.tail || index > this.size - 1) {
            console.log(`empty Deque or input idx is bigger than Deque length`);
            return;
        }
        else {
            let curIdx = this.size - 1;
            let tail = this.tail;
            while (curIdx !== index) {
                tail = tail.prev;
                curIdx--;
            }
            console.log(`your stuff is here, ${tail.value}`);
            return tail.value;
        }
    }
}
// stack, queue merge
// 제네릭 적용하여 타입 적용 원하는대로
const deque = new Deque();
deque.push('test1');
deque.getSize();
deque.push('test2');
deque.getSize();
deque.push('test3');
deque.getSize();
deque.push('test4');
deque.getSize();
deque.unshift('test1');
deque.getSize();
deque.unshift('test2');
deque.getSize();
deque.unshift('test3');
deque.getSize();
deque.unshift('test4');
deque.getSize();
deque.searchIdxByName('test5');
deque.searchIdxByName('test4');
deque.searchNameByIdx(1);
deque.searchNameByIdx(0);
deque.pop();
deque.getSize();
deque.pop();
deque.getSize();
deque.pop();
deque.getSize();
deque.pop();
deque.getSize();
deque.shift();
deque.getSize();
deque.shift();
deque.getSize();
deque.shift();
deque.getSize();
deque.shift();
deque.getSize();
