class DataSource {
    static province() {
        return fetch(`https://indonesia-covid-19.mathdro.id/api/provinsi/`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.data) {
                    return Promise.resolve(responseJson.data);
                } else {
                    return Promise.reject(`Data not found`);
                }
            })
    }
}

export default DataSource;