function countNodes() {
    let count = 0;

    function dfs(node) {
        if(!node) {
            return;
        }

        count++;

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return count;
}