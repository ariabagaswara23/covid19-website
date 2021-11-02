import '../component/province-list.js';
import '../component/search-bar.js';

const main = () => {
    const search = document.querySelector("search-bar");
    const pItemList = document.querySelector("province-list");
    const pItem = pItemList.getElementsByTagName("province-item");

    const onKeyUp = () => {
        const filterSearch = search.value.toUpperCase();
        for(let i = 0; i < pItem.length; i++){
            const h4 = pItem[i].getElementsByTagName("h4")[0];
            const h4Value = h4.textContent;
            if(h4Value.toUpperCase().indexOf(filterSearch) > -1) {
                pItem[i].style.display = "";
            }else{
                pItem[i].style.display = "none";
            }
        }
    }
    search.input.addEventListener("keyup", onKeyUp);
}

export default main;