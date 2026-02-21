class Stack(list):
    # Question 2
    def is_empty(self):
        return len(self)==0
    
    # Question 3
    def push(self, data):
        self.append(data)

    # Question 4
    def pop(self):
        if self.is_empty():
            return super().pop()
        else:
            raise IndexError("Stack is empty")
    
    # Question 5
    def peek(self):
        if not self.is_empty():
            return self[-1]
        else:
            raise IndexError("Stack is Empty")

    # Question 6
    def size(self):
        return len(self)
    
    # Question 7
    def insert(self, index, data):
        raise AttributeError("No attribute 'insert' in Stack")

s1=Stack()
s1.push(10)
s1.push(20)
s1.push(30)
print("top value=",s1.peek())