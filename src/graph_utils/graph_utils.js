/**
 * GRAPH FUNCTIONS.
 */

/** CHALLENGE NOTE
 *
 * I created this helper functions because it is easier to work with arrays in this kind of problems.
 */

/**
 * getConnectionsList: Get all graph connections in list format.
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
function getConnectionsList(graph) {
  return Object.values(graph.connections);
}

/**
 * getNodesList: Get all graph nodes in list format.
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
function getNodesList(graph) {
  return Object.values(graph.nodes);
}

/**
 * getNodeInputConnections: Get a node input connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeInputConnections(node, graph) {
  const { id: nodeId } = node;
  const connections = getConnectionsList(graph);

  return connections.filter(({ targetPath }) => targetPath === nodeId);
}

/**
 * getNodeOutputConnections: Get a node output connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeOutputConnections(node, graph) {
  const { id: nodeId } = node;
  const connections = getConnectionsList(graph);

  return connections.filter(({ sourcePath }) => sourcePath === nodeId);
}

/**
 * getNodeConnections: Get a node connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeConnections(node, graph) {
  const { id: nodeId } = node;
  const connections = getConnectionsList(graph);

  return connections.filter(({ sourcePath, targetPath }) =>
    [sourcePath, targetPath].includes(nodeId)
  );
}

/**
 * getLeafNodes: Get all leaf nodes (no output connections).
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getLeafNodes(graph) {
  const nodes = getNodesList(graph);

  return nodes.filter(
    (node) => getNodeOutputConnections(node, graph).length === 0
  );
}

/** CHALLENGE NOTE
 *
 * I assumed that the graphs are small. If the graph were big enought (tenths of thousand of nodes/edges)
 * we should not use the function above (as its complexity is O(n2)), we could use the one bellow, which is
 * performant (O(n)).
 */
/**
 * PERFORMANT_getLeafNodes: Get all leaf nodes (no output connections).
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function PERFORMANT_getLeafNodes(graph) {
  const connections = getConnectionsList(graph);
  const nodes = getNodesList(graph);

  const nonLeafNodesIds = new Set(
    connections.map(({ sourcePath }) => sourcePath)
  );

  const leafNodes = nodes.filter(({ id }) => !nonLeafNodesIds.has(id));
  return leafNodes;
}

/** CHALLENGE NOTE
 *
 * A performant version of this function could be implemented the same way as it was implemented in the previous
 * function.
 */
/**
 * getRootNodes: Get all root nodes (no input connections).
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getRootNodes(graph) {
  const nodes = getNodesList(graph);

  return nodes.filter(
    (node) => getNodeInputConnections(node, graph).length === 0
  );
}

/** CHALLENGE NOTE
 *
 * The following algorithm can be implemented using recursion, but I find this approach easier to understand.
 */
/**
 * hasMultipleSources: Determines if a node is reachable from different sources.
 * Uses BFS algorithm for graph traversal (https://en.wikipedia.org/wiki/Breadth-first_search)
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Boolean} True if a node has different source paths.
 */
export function hasMultipleSources(node, graph) {
  const queue = [node];
  const visited = new Set();

  while (queue.length) {
    const actNode = queue.shift();
    visited.add(actNode.id);

    const sourceConnections = getNodeInputConnections(actNode, graph);
    let sourceNodeIds = sourceConnections.map(({ sourcePath }) => sourcePath);

    // Get rid of duplicates
    sourceNodeIds = new Set(sourceNodeIds);

    // Fiter visited noder. We do not want to revisit them.
    sourceNodeIds = [...sourceNodeIds].filter((id) => !visited.has(id));

    queue.concat(sourceNodeIds);

    // When any of the nodes is reached from more than one node, `node` has multiple sources.
    if (sourceNodeIds.length > 1) {
      return true;
    }
  }

  return false;
}
