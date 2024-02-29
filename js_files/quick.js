async function quickSort() {
    const special = document.getElementsByClassName("bar");
    const n = special.length;
    sortingInProgress = true;

    async function partition(low, high) {
        const pivot = parseInt(special[high].style.height);
        let i = low - 1;

        for (let j = low; j <= high - 1; j++) {
            special[j].style.background = "red";
            await new Promise((resolve) => setTimeout(resolve, sortingSpeed));

            if (!sortingInProgress) {
                return;
            }

            const currentHeight = parseInt(special[j].style.height);

            if (currentHeight < pivot) {
                i++;
                swap(special[i], special[j]);
            }
            special[j].style.background = "yellow";
        }

        swap(special[i + 1], special[high]);

        for (let k = low; k <= high; k++) {
            if (k !== i + 1) {
                special[k].style.background = "green";
            }
        }

        return i + 1;
    }

    async function quickSortRecursive(low, high) {
        if (low < high) {
            const pi = await partition(low, high);

            await quickSortRecursive(low, pi - 1);
            await quickSortRecursive(pi + 1, high);
        }
    }

    await quickSortRecursive(0, n - 1);

    if (sortingInProgress) {
        for (let i = 0; i < n; i++) {
            special[i].style.background = "green";
        }
    }

    sortingInProgress = false;
}

const quickSortButton = document.getElementById("quickSort-button");
quickSortButton.addEventListener("click", quickSort);
