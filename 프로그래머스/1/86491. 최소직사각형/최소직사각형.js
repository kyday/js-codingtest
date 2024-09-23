function solution(sizes) {

    const rotatedSizes = sizes.map(([w, h]) => [Math.max(w, h), Math.min(w, h)]);
    

    const maxWidth = Math.max(...rotatedSizes.map(([w, _]) => w));
    const maxHeight = Math.max(...rotatedSizes.map(([_, h]) => h));
    

    return maxWidth * maxHeight;
}

