const createPages = (imgArr, pagesCount, currentPage) => {
    const pages = [];
    if(pagesCount > 5) {
        if(currentPage <= pagesCount) {
            for (let i = currentPage-1; i <= currentPage+4; i++) {
                pages.push(imgArr[i])
                if(i === pagesCount) break
            }
        }
        else {
            for (let i = pagesCount-5; i <= pagesCount-1; i++) {
                pages.push(imgArr[i])
                if(i === pagesCount) break
            }
        }
    }  else {
        for (let i = 0; i <= pagesCount-1; i++) {
            pages.push(imgArr[i])
        }
    }
    return pages;
}

export {createPages};
//currentPage - поточна Page
//pagesCount - кількість Page