function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  el1.style.height = transform2;
  el2.style.height = transform1;
}

async function insertionSort() {
    const special = document.getElementsByClassName("bar");
    const n = special.length;
    sortingInProgress = true;

    for (let i = 1; i < n; i++) {
        special[i].style.background = "red";
        await new Promise((resolve) => setTimeout(resolve, sortingSpeed));

        if (!sortingInProgress) {
            return;
        }

        let temp = parseInt(special[i].style.height);
        let j = i - 1;

        while (j >= 0 && temp < parseInt(special[j].style.height)) {
            swap(special[j], special[j + 1]);
            j = j - 1;
        }

    special[j + 1].style.height = temp + "px";
    special[i].style.background = "green";
    }
    for(let i=0;i<n;i++){
        special[i].style.background="green";
    }
    sortingInProgress = false;
}

const insertionSortButton = document.getElementById("insertionSort-button");
insertionSortButton.addEventListener("click", insertionSort);
