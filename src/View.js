const View = {
  render({ minutes, seconds }) {
    const html = `
      <p>Next post in</p>
      <span>${minutes}:${seconds}</span>`;

    document.getElementById("root").innerHTML = html;
  }
};

export { View };
