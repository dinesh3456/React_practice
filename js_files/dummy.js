function swap(el1,el2){
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const elHeight1 = style1.getPropertyValue("height");
    const elHeight2 = style2.getPropertyValue("height");

    elHeight1.style.height = elHeight2;
    elHeight2.style.height = elHeight1;
}