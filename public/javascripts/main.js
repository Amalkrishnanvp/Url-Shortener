document.addEventListener("DOMContentLoaded", () => {
  const shortenBtn = document.querySelector(".shorten-btn");
  const urlHolder = document.querySelector(".url-holder");
  const resultUrl = document.querySelector(".result-url");
  const popUpMsg = document.querySelector(".pop-up-msg");

  async function shorternUrl(longUrl) {
    try {
      // API request to server
      const response = await fetch("/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        displayUrl(data);
        showMsg();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log("Error shortening url:", error);
      throw error;
    }
  }

  function showMsg() {
    popUpMsg.classList.remove("hidden");
    popUpMsg.classList.add("flex");
    popUpMsg.classList.add("opacity-10");

    setTimeout(() => {
      popUpMsg.classList.add("fade");

      setTimeout(() => {
        popUpMsg.classList.remove("flex");
        popUpMsg.classList.remove("fade");
        popUpMsg.classList.add("hidden");
      }, 2200);
    }, 2500);
  }

  function displayUrl(data) {
    console.log(data);
    resultUrl.innerText = data.url;
  }

  shortenBtn.addEventListener("click", () => {
    if (urlHolder.value) {
      const longUrl = urlHolder.value;
      shorternUrl(longUrl);
    }
  });
});
