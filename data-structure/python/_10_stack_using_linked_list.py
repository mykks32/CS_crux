# Question 1
from _3_singly_linked_list import *

class Stack:
    # Question 2
    def __init__(self):
        self.myList = SLL()
        self.count = 0
    
    # Question 3
    def is_empty(self):
        return self.myList.is_empty()
    
    # Question 4
    def push(self, data):
        self.myList.insert_at_start(data)
        self.count +=1

    # Question 5
    def pop(self):
        self.myList.delete_first()
        self.count -=1

    # Question 6
    def peek(self):
        return self.myList.start.item
    
    # Questino 7
    def size(self):
        return self.count
    
s=Stack()
s.push(10)
s.push(20)
s.push(30)
print("Top element is",s.peek())
s.pop()
print("Top element is",s.peek())
print()