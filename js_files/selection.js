function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  el1.style.height = transform2;
  el2.style.height = transform1;
}

async function selectionSort() {
  const special = document.getElementsByClassName("bar");
  const n = special.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      special[j].style.background = "red";
      await new Promise((resolve) => setTimeout(resolve, sortingSpeed));

      const height1 = parseInt(special[j].style.height);
      const height2 = parseInt(special[minIndex].style.height);

      if (height1 < height2) {
        minIndex = j;
      }

      special[j].style.background = "yellow";
    }

    swap(special[i], special[minIndex]);
    special[i].style.background = "green";
  }

  special[n - 1].style.background = "green";
}

const selectionSortButton = document.getElementById("selectionSort-button");
selectionSortButton.addEventListener("click", selectionSort);
