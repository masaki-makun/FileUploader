/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/fonts/css/all.css":
/*!*******************************!*\
  !*** ./src/fonts/css/all.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/fonts/fonts.css":
/*!*****************************!*\
  !*** ./src/fonts/fonts.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _fonts_css_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts/css/all.css */ "./src/fonts/css/all.css");
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/fonts.css */ "./src/fonts/fonts.css");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/main.js */ "./src/js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_3__);






})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map