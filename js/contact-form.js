document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const alertSuccess = document.querySelector(".alert-success");
  const btnKirim = document.querySelector(".btn-kirim");
  const btnLoading = document.querySelector(".btn-loading");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    btnKirim.classList.add("d-none");
    btnLoading.classList.remove("d-none");

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alertSuccess.classList.remove("d-none");
        form.reset();
      } else {
        console.error("There was an issue with the form submission.");
      }
    } catch (error) {
      console.error("There was an error:", error);
    } finally {
      btnLoading.classList.add("d-none");
      btnKirim.classList.remove("d-none");
    }
  });
});
