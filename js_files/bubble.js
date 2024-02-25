  function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
  }


  let sortingInProgress = false;
  async function bubbleSort() {
    const special = document.getElementsByClassName("bar");
    const n = special.length;
    sortingInProgress = true;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        special[j].style.background = "red";
        special[j + 1].style.background = "red";

        await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); 

        const height1 = parseInt(special[j].style.height);
        const height2 = parseInt(special[j + 1].style.height);

        if (height1 > height2) {
          swap(special[j], special[j + 1]);
        }

        special[j].style.background = "yellow";
        special[j + 1].style.background = "yellow";
        if(!sortingInProgress){
          return;
        }
      }
      special[n - i - 1].style.background = "green";
    }
    for (let i = 0; i < n; i++) {
      special[i].style.background = "green";
    }
    sortingInProgress=false;
  }

  const bubbleSortButton = document.getElementById("bubbleSort-button");
  bubbleSortButton.addEventListener("click", bubbleSort);

s