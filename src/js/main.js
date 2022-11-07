const fileUploadFunction = () => {
  const label = document.querySelector(".upload__label");
  const input = document.querySelector(".upload__input--file");
  const fileList = document.querySelector(".file-list");
  const CLASS_EMPTY = "is-empty";
  label.addEventListener("click", () => {
    input.click();
  });
  input.addEventListener("change", () => {
    uploadFiles();
    isEmpty();
  });

  function uploadFiles() {
    const file = document.createElement("li");
    const fileInner = document.createElement("div");
    const fileIcon = document.createElement("i");
    const fileContent = document.createElement("div");
    const fileNameWrapper = document.createElement("div");
    const fileName = document.createElement("p");
    const progress = document.createElement("div");
    const progressBar = document.createElement("div");
    const deleteButton = document.createElement("button");
    const deleteButtonIcon = document.createElement("i");
    file.classList.add("file");
    fileInner.classList.add("file__inner");
    fileIcon.classList.add("far", "fa-file-pdf");
    fileContent.classList.add("file__content");
    fileNameWrapper.classList.add("file__name-wrapper");
    fileName.classList.add("file__name");
    progress.classList.add("file__progress");
    progressBar.classList.add("progress-bar", "is-animated");
    deleteButton.classList.add("btn", "btn--close");
    deleteButtonIcon.classList.add("fas", "fa-times");
    fileName.innerHTML = input.files[0].name;
    file.appendChild(fileInner);
    file.appendChild(deleteButton);
    deleteButton.appendChild(deleteButtonIcon);
    fileInner.appendChild(fileIcon);
    fileInner.appendChild(fileContent);
    fileNameWrapper.appendChild(fileName);
    fileContent.appendChild(fileNameWrapper);
    fileContent.appendChild(progress);
    progress.appendChild(progressBar);
    fileList.appendChild(file);

    function loadingComplete() {
      let timer = null;
      window.clearInterval(timer);
      timer = window.setInterval(() => {
        progressBar.classList.remove("is-animated");
        progressBar.classList.add("is-completed");
      }, 800);
      input.addEventListener("change", () => {
        window.clearInterval(timer);
      });
    }
    loadingComplete();

    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      deleteFiles(deleteButton);
      isEmpty();
    });
  }

  function isEmpty() {
    fileList.classList.remove(CLASS_EMPTY);
    if (fileList.childNodes.length === 1) {
      fileList.classList.add(CLASS_EMPTY);
    } else if (fileList.childNodes.length > 1) {
      fileList.classList.remove(CLASS_EMPTY);
    }
  }

  function deleteFiles(deleteButton) {
    const chosenFiles = deleteButton.closest(".file");
    fileList.removeChild(chosenFiles);
    input.value = "";
  }
};

const loadingAnimation = () => {
  const progressBar = document.querySelectorAll(".progress-bar");
  setTimeout(() => {
    progressBar.forEach((bar) => {
      bar.classList.remove("is-animated");
    });
  }, 800);
  setTimeout(() => {
    progressBar.forEach((bar) => {
      bar.classList.add("is-completed");
    });
  }, 800);
};

document.addEventListener("DOMContentLoaded", () => {
  fileUploadFunction();
  loadingAnimation();
});
