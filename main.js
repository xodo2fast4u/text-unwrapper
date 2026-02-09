const inputArea = document.getElementById("inputArea");
const outputArea = document.getElementById("outputArea");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");
const toast = document.getElementById("toast");

function formatText() {
  const raw = inputArea.value;
  const formatted = raw.replace(/\n/g, " ").replace(/\s\s+/g, " ").trim();

  outputArea.value = formatted;
}

function showToast() {
  toast.style.opacity = "1";
  toast.style.transform = "translate(-50%, -20px)";
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translate(-50%, 0)";
  }, 2000);
}

inputArea.addEventListener("input", formatText);

copyBtn.addEventListener("click", () => {
  if (!outputArea.value) return;

  outputArea.select();
  document.execCommand("copy");

  const copyTextLabel = document.getElementById("copyText");
  const originalText = copyTextLabel.innerText;
  copyTextLabel.innerText = "Copied!";
  showToast();
  setTimeout(() => {
    copyTextLabel.innerText = originalText;
  }, 2000);
});

clearBtn.addEventListener("click", () => {
  inputArea.value = "";
  outputArea.value = "";
  inputArea.focus();
});
