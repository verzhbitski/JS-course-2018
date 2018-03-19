class WeightedGraph {
    constructor(edges) {
        let nodes = {};
        edges.forEach(function (edge) {
            if (nodes[edge[0]] === undefined) {
                nodes[edge[0]] = {};
            }
            nodes[edge[0]][edge[1]] = edge[2];
            if (nodes[edge[1]] === undefined) {
                nodes[edge[1]] = {};
            }
            nodes[edge[1]][edge[0]] = edge[2];
        });
        this.nodes = nodes;
    }

    minimalPath(start, end) {
        let vertices = Object.getOwnPropertyNames(this.nodes);
        let minCost = [];
        vertices.forEach(function (vertex) {
            minCost[vertex] = Infinity;
        });
        minCost[start] = 0;
        let currentVertex;
        let parents = [];
        let n = vertices.length;
        for (let i = 0; i < n; ++i) {
            currentVertex = -1;
            vertices.forEach(function (vertex) {
                if (currentVertex === -1 || minCost[vertex] < minCost[currentVertex])
                    currentVertex = vertex;
            });
            if (minCost[currentVertex] === Infinity) {
                break;
            }
            let index = vertices.indexOf(currentVertex);
            vertices.splice(index, 1);
            let tos = Object.getOwnPropertyNames(this.nodes[currentVertex]);
            for (let to of tos) {
                if (minCost[currentVertex] + this.nodes[currentVertex][to] < minCost[to]) {
                    minCost[to] = minCost[currentVertex] + this.nodes[currentVertex][to];
                    parents[to] = currentVertex;
                }
            }
        }
        if (minCost[end] === Infinity) {
            return 'No path';
        }
        let path = [];
        let vertex = end;
        while (vertex != start) {
            path.push(vertex);
            vertex = parents[vertex];
        }
        path.push(start);
        return path.reverse().join(' -> ');
    }
}