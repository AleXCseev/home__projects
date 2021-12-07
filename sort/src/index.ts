import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection"

const numbersCollection = new NumbersCollection([-4, 3, -300, 11, 5, -1])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data)

