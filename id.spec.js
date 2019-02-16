describe('Test Category 1', function(){
	test('Jest is working', function(){
		expect(1).toBe(1);
	});	
});

describe('Returns an unique ID', function(){
	function getNewId(){
		return Math.random()
	}
	test('Returns a random number', function(){
		const mockMath = Object.create(global.Math);
		mockMath.random = jest.fn(function(){
			return 0.75;
		});
		global.Math = mockMath;
		const id = getNewId();
		expect(id).toBe(0.75);
	});
});