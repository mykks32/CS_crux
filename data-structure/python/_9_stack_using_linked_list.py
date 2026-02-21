class Node:
    def __init__(self, item , next):
        self.item = item
        self.next = next

class Stack:
    # Question 1
    def __init__(self, start=None):
        self.start = start
        self.count = 0
        
    # Question 2
    def is_empty(self):
        return self.start == None
    
    # Questin 3
    def push(self, data):
        n=Node(data,self.start)
        self.start=n
        self.count+=1
    
    # Question 4
    def pop(self):
        if not self.is_empty():
            data = self.start.item
            self.start = self.start.next
            self.count -= 1
            return data
        else:
            raise IndexError("Stack is empty")

    # Question 5
    def peek(self):
        if not self.is_empty():
            return self.start.item
        else:
            raise IndexError("Stack is empty")

    # Question 6
    def size(self):
        return self.count

s1=Stack()
s1.push(10)
s1.push(20)
s1.push(30)
print("Total elements in the stack=",s1.size())
print("Top element on the stack is",s1.peek())
print("Poped element is",s1.pop())
print("Total elements in the stack=",s1.size())
print("Top element on the stack is",s1.peek())
print()      
