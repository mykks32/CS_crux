from _3_singly_linked_list import *

class Stack(SLL):
    def __init__(self):
        super().__init__()
        self.count = 0
    def is_empty(self):
        return super().is_empty()
    def push(self, data):
        super().insert_at_start(data)
        self.count+=1
    def pop(self):
        if not self.is_empty():
            super().delete_first()
            self.count-=1
        else:
            raise IndexError("Stack Underflow")
    def peek(self):
        if not self.is_empty():
            return self.start.item
        else:
            raise IndexError("Stack Underflow")
    def size(self):
        return self.count
    
# Return program
mylist = Stack()
mylist.push(50)
mylist.push(55)
mylist.push(97)
mylist.push(88)
print("top of the stack is ", mylist.peek())
mylist.pop()
print("top of the stack is ", mylist.peek())
print("total number of item", mylist.size())