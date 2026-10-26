(function () {
  function getQueryParam(name, fallback) {
    const value = new URLSearchParams(window.location.search).get(name);
    return value !== null && value !== "" ? value : fallback;
  }

  const minutes = parseInt(getQueryParam("minutes", "10"), 10);
  const label = getQueryParam("label", "Get ready, we start shortly!");

  const labelEl = document.getElementById("countdown-label");
  const timeEl = document.getElementById("countdown-time");

  if (labelEl) labelEl.textContent = label;

  let totalSeconds = Number.isFinite(minutes) && minutes > 0 ? minutes * 60 : 10 * 60;

  function format(sec) {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  function tick() {
    if (!timeEl) return;

    timeEl.textContent = format(totalSeconds);
    if (totalSeconds > 0) {
      totalSeconds -= 1;
      setTimeout(tick, 1000);
    }
  }

  tick();
})();
