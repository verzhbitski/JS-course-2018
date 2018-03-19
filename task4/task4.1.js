class Graph {
    constructor(edges) {
        let nodes = {};
        edges.forEach(function(edge) {
            if (nodes[edge[0]] === undefined) {
                nodes[edge[0]] = [];
            }
            nodes[edge[0]].push(edge[1]);
            if (nodes[edge[1]] === undefined) {
                nodes[edge[1]] = [];
            }
            nodes[edge[1]].push(edge[0]);
        });
        this.nodes = nodes;
    }

    dfs() {
        let used = [];
        let stack = [];

        let start = Object.getOwnPropertyNames(this.nodes)[0];

        stack.push(parseInt(start));

        while (stack.length > 0) {
            let vertex = stack.pop();
            if (!used.includes(vertex)) {
                used.push(vertex);
                stack = stack.concat(this.nodes[vertex]);
            }
        }

        console.log(used.join(' '));
    }

    bfs() {
        let used = [];
        let queue = [];

        let start = Object.getOwnPropertyNames(this.nodes)[0];

        queue.push(parseInt(start));

        while (queue.length > 0) {
            let vertex = queue.shift();
            if (!used.includes(vertex)) {
                used.push(vertex);
                queue = queue.concat(this.nodes[vertex]);
            }
        }

        console.log(used.join(' '));
    }
}