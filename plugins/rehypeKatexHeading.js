const visit = require('unist-util-visit');

module.exports = () => {
  return (tree) => {
    visit(tree, 'heading', (node) => {
      node.children.forEach((child) => {
        if (child.type === 'text' && /\$.*?\$/.test(child.value)) {
          // $...$ 형식의 수식을 HTML로 변환
          child.type = 'html';
          child.value = child.value.replace(/\$(.*?)\$/g, (_, expr) => {
            return `<span class="katex">${expr}</span>`; // KaTeX 적용
          });
        }
      });
    });
  };
};