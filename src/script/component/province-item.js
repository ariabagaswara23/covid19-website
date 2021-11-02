class ProvinceItem extends HTMLElement {
    set province(province){
        this._province = province;
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="py-3 border-bottom mt-4">
            <div class="row font-weight-bold mt-2 d-flex flex-wrap align-items-center">
                <div class="col-6 border-right">
                    <h4 class="font-weight-bold mr-auto nama-provinsi">${this._province.provinsi}</h4>
                </div>
                <div class="col-2 border-right">
                    <p class="mb-0 font-weight-bold text-warning">Kasus</p>
                    <p class="mb-0 text-warning">${this._province.kasusPosi}</p>
                </div>
                <div class="col-2 border-right">
                    <p class="mb-0 font-weight-bold text-success">Sembuh</p>
                    <p class="mb-0 text-success">${this._province.kasusSemb}</p>
                </div>
                <div class="col-2">
                    <p class="mb-0 font-weight-bold text-danger">Kematian</p>
                    <p class="mb-0 text-danger">${this._province.kasusMeni}</p>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define("province-item", ProvinceItem);