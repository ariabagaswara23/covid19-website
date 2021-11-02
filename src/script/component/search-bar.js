class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get input(){
        return this.querySelector("#searchElement");
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }
  
    render() {
        this.innerHTML = `
        <style>
        .search-container {
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
        }
        
        .search-container > input {
            width: 100%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid #008891;
            font-weight: bold;
            color: #008891;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid #008891;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: #008891;
            font-weight: normal;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        }
        </style>
        
        <div id="search-container" class="search-container">
            <input placeholder="Cari Provinsi" id="searchElement" type="search">
        </div>
        `;
  
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
 }
  
 customElements.define("search-bar", SearchBar);