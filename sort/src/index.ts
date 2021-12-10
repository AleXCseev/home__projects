import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([-4, 3, 1000, -300, 11, 5, -1])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection("ZxYNBa");
const sorterString = new Sorter(charactersCollection)
sorterString.sort()
console.log(charactersCollection.data);


const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-100);
linkedList.add(8);
linkedList.add(-12);

const linkedSorter = new Sorter(linkedList)
linkedSorter.sort();
linkedList.print()