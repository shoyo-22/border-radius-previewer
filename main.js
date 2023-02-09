const borderRadiusForm = document.getElementById("b-radius-form");
const previewContainer = document.getElementById("preview-container");

borderRadiusForm.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(borderRadiusForm);
  const values = Object.fromEntries(formData.entries());
  const borders = fourValues(values);
  previewContainer.style.borderRadius = borders;
};

function fourValues({ tl, tr, br, bl }) {
  /**
   * tl: top-left
   * tr: top-right
   * br: bottom-right
   * bl: bottom-left
   */
  return `${tl || 0}px ${tr || 0}px ${br || 0}px ${bl || 0}px`;
}
