import uuid from 'uuid';

const priceItem = {

};

const base = {
    id: '',
    name: '',
    location: '',
    address: '',
    getLocation() {
        return this.location;
    }
};

const lobnyaBase = base;
lobnyaBase.name = 'Lobnya metallobaza';
lobnyaBase.location = 'Lobnya';

// const getBaseLocation = (base) => (base.location);

console.log(lobnyaBase.getLocation());