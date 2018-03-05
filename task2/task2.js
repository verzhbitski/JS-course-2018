
function Node(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

function List() {
    this.first = null;
    this.last = null;
    this.size = 0;

    this.add = function (value) {
        let node = new Node(value);

        if (this.first == null) {
            this.first = node;
        } else {
            this.last.next = node;
            node.prev = this.last;
        }

        this.last = node;

        this.size++;
    };

    this.search = function (value) {
        let node = this.first;

        while (node != null) {
            if (node.value === value) {
                return node;
            }
            node = node.next;
        }

        return null;
    };

    this.remove = function (value) {
        let node = this.first;

        if (this.size === 0) {
            return false;
        }

        while (node.value !== value) {
            node = node.next;
            if (node == null) {
                return false;
            }
        }

        this.size--;

        if (this.size === 0) {
            this.first = null;
            this.last = null;
            return true;
        }

        if (node === this.first) {
            node.next.prev = null;
            this.first = node.next;
            return true;
        } else if (node === this.last) {
            node.prev.next = null;
            this.last = node.prev;
            return true;
        }

        node.prev.next = node.next;
        node.next.prev = node.prev;

        return true;
    };

    this.reverse = function () {
        let node = this.first;

        while (node != null) {
            let next_node = node.next;

            node.next = node.prev;
            node.prev = next_node;

            node = next_node;
        }

        let tmp = this.first;
        this.first = this.last;
        this.last = tmp;

        return this;
    };
}

function number_to_list(number) {
    let list = new List();

    do {
        list.add(number % 10);
        number = Math.floor(number / 10);
    } while (number !== 0);

    return list.reverse();
}

function lists_sum(list1, list2) {
    if (list2.size > list1.size) {
        let tmp = list2;
        list2 = list1;
        list1 = tmp;
    }

    let result = new List();
    let node1 = list1.first;
    let node2 = list2.first;
    let offset = 0;

    for (let i = 0; i < list1.size; ++i) {
        let a = node1.value;
        let b = node2 == null ? 0 : node2.value;

        let sum = a + b + offset;
        result.add(sum % 10);
        offset = Math.floor(sum / 10);

        node1 = node1.next;
        node2 = node2 == null ? node2 : node2.next;
    }

    if (offset !== 0) {
        result.add(offset)
    }

    return result;
}