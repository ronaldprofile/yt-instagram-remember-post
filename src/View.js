const View = {
  render({ minutesLeft, minutesRight }, { secondsLeft, secondsRight }) {
    const html = `
    <h2 class="title">Next post in</h2>
    <div class="countdownContainer">
      <div>
        <span>${minutesLeft}</span>
        <span>${minutesRight}</span>
      </div>

      <span class="separator">:</span>

      <div>
        <span>${secondsLeft}</span>
        <span>${secondsRight}</span>
      </div>
    </div>
    `;

    document.getElementById("root").innerHTML = html;
  }
};

export { View };
