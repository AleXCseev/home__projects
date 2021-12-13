import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([-4, 3, 1000, -300, 11, 5, -1])
numbersCollection.sort();
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection("ZxYNBa");
charactersCollection.sort()
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-100);
linkedList.add(8);
linkedList.add(-12);
linkedList.sort();
linkedList.print()