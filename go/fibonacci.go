package main

mport "fmt"

func fibonacci(num int, memo map[int]int) int {
	if num <= 1 {
		return 1
	}

	if val, ok := memo[num]; ok {
		return val
	}

	memo[num] = fibonacci(num-1, memo) + fibonacci(num-2, memo)
	return memo[num]
}

func main() {
	memo := make(map[int]int)
	fmt.Printf("FIB: %d\n", fibonacci(50, memo))
}
