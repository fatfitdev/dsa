# frozen_string_literal: true

def fibFast(num, memo = {})
  return memo[num] unless memo[num].nil?

  return 1 if num <= 2

  memo[num] = fibFast(num - 1, memo) + fibFast(num - 2, memo)
end

puts "FIB: #{fastFibonacci(50)}"
