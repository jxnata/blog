import Code from "./code";

const prism = {
  name: "prism",
  test: ({ node }) =>
    node.type === "element" &&
    node.component === "code" &&
    node.parent.component === "pre" &&
    node.parent.props?.className?.match(/language-/),
  processor: ({ node }) => {
    const result = node.parent.props?.className?.match(/language-(\w*)\b/);
    node.props.className = result[0];
    node.component = Code;
    return node;
  },
};

export default prism;
