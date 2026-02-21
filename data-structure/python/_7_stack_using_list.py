class Stack:
    # Question 1
    def __init__(self):
        self.items = []
    
    # Question 2
    def is_empty(self):
        return len(self.items) == 0
    
    # Question 3
    def push(self, data):
        self.items.append(data)

    # Question 4
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        else:
            raise IndexError("Stack is empty")
    
    # Question 5
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        else:
            raise IndexError("Stack is empty")
        
    def size(self):
        return len(self.items)
    
s1=Stack()
s1.push(10)
s1.push(20)
s1.push(30)
print("Top element is",s1.peek())
print("Removed element is",s1.pop())
print("Top element is",s1.peek())
print()