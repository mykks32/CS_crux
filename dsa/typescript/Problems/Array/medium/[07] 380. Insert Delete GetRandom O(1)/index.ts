class RandomizedSet {
	private readonly nums: Array<number>;
	private map: Map<number, number>;

	constructor() {
		this.nums = new Array<number>();
		this.map = new Map();
	}

	insert( val: number ): boolean {
		if (this.map.has(val)) return false;

		// Insert into Array
		this.nums.push(val);
		// Map value and array index
		this.map.set(val, this.nums.length - 1);
		return true;
	}

	remove( val: number ): boolean {
		if ( !this.map.has(val) ) return false;

		const index = this.map.get(val)!;
		const lastElement = this.nums[this.nums.length - 1];

		// swap current element with last
		this.nums[index] = lastElement;
		// update map for swapped element
		this.map.set(lastElement, index);

		// remove last element
		this.nums.pop();
		// delete from map
		this.map.delete(val);

		return true;
	}

	getRandom(): number {
		const randomIndex = Math.floor(Math.random() * this.nums.length);
		return this.nums[randomIndex];
	}
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

( () => {
	// Create instance
	const obj = new RandomizedSet();

	// Test Case using Object
	const param_1 = obj.insert(1);
	const param_2 = obj.remove(2);
	const param_3 = obj.insert(2);
	const param_4 = obj.getRandom();
	const param_5 = obj.remove(1);
	const param_6 = obj.insert(2);
	const param_7 = obj.getRandom();

	console.log(param_1, param_2, param_3, param_4, param_5, param_6, param_7);
} )()