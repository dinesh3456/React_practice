async function mergeSort() {
    const special = document.getElementsByClassName("bar");
    const n = special.length;
    sortingInProgress = true;

    async function merge(low, mid, high) {
        const n1 = mid - low + 1;
        const n2 = high - mid;

        const leftArray = new Array(n1);
        const rightArray = new Array(n2);
        if(!sortingInProgress) return;

        for (let i = 0; i < n1; i++) {
            leftArray[i] = parseInt(special[low + i].style.height);
            special[low + i].style.background = "red";
            await new Promise((resolve) => setTimeout(resolve, sortingSpeed));
            if (!sortingInProgress) return;
        }

        for (let j = 0; j < n2; j++) {
            rightArray[j] = parseInt(special[mid + 1 + j].style.height);
            special[mid + 1 + j].style.background = "red";
            await new Promise((resolve) => setTimeout(resolve, sortingSpeed));
            if (!sortingInProgress) return;
        }

        let i = 0, j = 0, k = low;

        while (i < n1 && j < n2) {
            if (leftArray[i] <= rightArray[j]) {
                special[k].style.height = leftArray[i] + "px";
                i++;
            } else {
                special[k].style.height = rightArray[j] + "px";
                j++;
            }
            k++;
            if(!sortingInProgress) return;
        }

        while (i < n1) {
            special[k].style.height = leftArray[i] + "px";
            i++;
            k++;
            if(!sortingInProgress) return;
        }

        while (j < n2) {
            special[k].style.height = rightArray[j] + "px";
            j++;
            k++;
            if(!sortingInProgress) return;
        }

        for (let p = low; p <= high; p++) {
            special[p].style.background = "green";
            if(!sortingInProgress) return;
        }
    }

    async function mergeSortRecursive(low, high) {
        if (low < high) {
            const mid = Math.floor((low + high) / 2);
            await mergeSortRecursive(low, mid);
            await mergeSortRecursive(mid + 1, high);
            await merge(low, mid, high);
            if(!sortingInProgress) return;
        }
    }

    await mergeSortRecursive(0, n - 1);

    if (sortingInProgress) {
        for (let i = 0; i < n; i++) {
            special[i].style.background = "green";
        }
    }

    sortingInProgress = false;
}

const mergeSortButton = document.getElementById("mergeSort-button");
mergeSortButton.addEventListener("click", mergeSort);
