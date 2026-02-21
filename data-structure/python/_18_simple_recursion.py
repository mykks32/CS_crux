# Question 1
def printN(n):
    if n>0:
        printN(n-1)
        print(n,end=' ')

# Question 2
def printNreverse(n):
    if n>0:
        print(n,end=' ')
        printNreverse(n-1)

# Question 3
def printNOdd(n):
    if n>0:
        printNOdd(n-1)
        print(2*n-1,end=' ')

# Question 4
def printNEven(n):
    if n>0:
        printNEven(n-1)
        print(2*n,end=' ')

# Question 5
def printNOddreverse(n):
    if n>0:
        print(2*n-1,end=' ')
        printNOddreverse(n-1)

# Question 6
def printNEvenreverse(n):
    if n>0:
        print(2*n,end=' ')
        printNEvenreverse(n-1)
    
printN(10)
print()
printNreverse(10)
print()
printNOdd(10)
print()
printNEven(10)
print()
printNOddreverse(10)
print()
printNEvenreverse(10)