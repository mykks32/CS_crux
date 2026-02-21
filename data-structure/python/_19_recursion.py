def sumN(n):
    if n == 1:
        return 1
    else:
        return n + sumN(n-1)
    
def sumNodd(n):
    if n == 1:
        return 1
    else:
        return 2*n-1 + sumNodd(n-1)
    
def sumNeven(n):
    if n == 1:
        return 2
    else:
        return 2*n + sumNeven(n-1)
    
def fact(n):
    if n == 0:
        return 1
    return n * fact(n-1)

def square(n):
    if n == 1:
        return 1
    return n*n + square(n-1)
    
print("sum of natural number is", sumN(10))
print("sum of natural odd number is", sumNodd(10))
print("sum of natural even number is", sumNeven(10))
print("sum of n factorial number is", fact(5))
print("sum of n square number is", square(5))

