   # 1. Any live cell with fewer than two live neighbours dies, as if by needs caused by underpopulation.
   # 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
   # 3. Any live cell with two or three live neighbours lives, unchanged, to the next generation.
   # 4. Any dead cell with exactly three live neighbours becomes a live cell.

class Game
	def initialize(x,y)
		@x = x
		@y = y
		@board = Array.new(y) {Array.new(x), 0} 
	end	
end
