function countNodes() {
    let count = 0; // starting from count 0

    function dfs(node) {
        if(!node) { // if node is null, then return
            return;
        }

        count++; // found a valid node so increment node count by 1

        dfs(node.left); // visit the left child
        dfs(node.right); // visit the right child
    }

    dfs(root); // starting from the root node

    return count; // return the count of valid nodes.
}