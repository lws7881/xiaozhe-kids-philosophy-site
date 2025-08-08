// JavaScript for quiz interaction on the thinking lab page.

document.addEventListener('DOMContentLoaded', () => {
  const explanationEl = document.getElementById('explanation');
  const radios = document.querySelectorAll('input[name="q1"]');
  const messages = {
    obedient: '听话的狗也许看起来不自由，但它可能在选择遵守规则。自由不只是行为的放任，更是一种内心的选择。',
    running: '奔跑的狗享受身体的自由，但它也可能受到外界环境的影响。自由有时是相对的，与责任和安全相平衡。',
    both: '两只狗都自由，它们在不同的情况下选择了自己的行为。自由可以有多种表达方式。',
    neither: '也许狗并没有完全的自由，因为它们仍受主人和环境的约束。我们可以思考自由的边界在哪里。'
  };

  radios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      const value = event.target.value;
      const message = messages[value] || '';
      explanationEl.textContent = message;
      explanationEl.style.display = 'block';
    });
  });
});
