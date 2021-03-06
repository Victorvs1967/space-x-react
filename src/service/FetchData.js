
export default class FetchData {

    startUrl = 'https://api.spacexdata.com/v4/';

    getData = async url => {

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error! ${res.status}`);
        }
        return await res.json();
    };

    getRocket = async () => await this.getData(this.startUrl + 'rockets');
    getLaunches = async () => await this.getData(this.startUrl + 'launches/past');
    getCompany = async () => await this.getData(this.startUrl + 'company');

};