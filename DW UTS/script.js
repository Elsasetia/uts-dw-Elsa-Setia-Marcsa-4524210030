document.getElementById("preview-btn").addEventListener("click", function () {
  const name = document.getElementById("brand-name").value;
  const type = document.getElementById("fashion-type").value;
  const rating = document.getElementById("customer-rating").value;

  document.getElementById("preview-name").textContent = name || "elsclothyle.tics";
  document.getElementById("preview-type").textContent = "Jenis Fashion: " + (type || "Belum dipilih");

  if (rating) {
    document.getElementById("preview-rating").innerHTML = `
      <p>🌟 Rating Pelanggan: <strong>${rating}/5</strong></p>
      <meter min="0" max="5" value="${rating}" title="${rating} dari 5"></meter>
    `;
  } else {
    document.getElementById("preview-rating").innerHTML = `<p>Belum ada rating pelanggan.</p>`;
  }
});