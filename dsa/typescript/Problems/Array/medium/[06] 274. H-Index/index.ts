class HIndex {
	constructor() {}

	public hIndex( citations: number[] ): number {
		let output: number = 0;

		citations.sort(( a, b ) => b - a)
			.forEach(( citation, index ) => {
				if ( citation >= index + 1 ) {
					output++
				}
			})
		return output;
	};
}

( () => {
	const obj = new HIndex();
	console.log(obj.hIndex([ 3, 0, 6, 1, 5 ]))
	console.log(obj.hIndex([ 1, 3, 1 ]))
} )()