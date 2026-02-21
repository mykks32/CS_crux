class Deque:
    # Question 1
    def __init__(self):
        self.items = []
    
    # Qustion 2
    def is_empty(self):
        return len(self.items) == 0
    
    # Question 3
    def insert_front(self, data):
        self.items.insert(0, data)

    # Question 4
    def insert_rear(self, data):
        self.items.append(data)

    # Question 5
    def delete_front(self):
        if not self.is_empty():
            self.items.pop(0)
        else:
            return IndexError("Empty Deque")

    # Question 6
    def delete_rear(self):
        if not self.is_empty():
            self.items.pop(-1)
        else:
            return IndexError("Empty Deque")
    
    # Question 7
    def get_front(self):
        if not self.is_empty():
            return self.items[0]
        else:
            return IndexError("Empty Deque")
    
    # Question 8
    def get_rear(self):
        if not self.is_empty():
            return self.items[-1]
        else:
            return IndexError("Empty Deque")
    
    def size(self):
        return len(self.items)
    
q1 = Deque()
q1.insert_front(30)
q1.insert_front(20)
q1.insert_front(10)
q1.insert_rear(40)
q1.insert_rear(50)
print(q1.get_front(), q1.get_rear())
print("size" , q1.size())
q1.delete_front()
print(q1.get_front(), q1.get_rear())
print("size" , q1.size())
q1.delete_rear()
print(q1.get_front(), q1.get_rear())
print("size" , q1.size())