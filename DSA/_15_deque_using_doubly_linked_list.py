# Question 1
class Node:
    def __init__(self, item= None, prev= None, next= None):
        self.item= item
        self.prev = prev
        self.next = next

# Question 2
class Deque:
    def __init__(self):
        self.front = None
        self.rear = None
        self.items_count = 0
    
    # Question 3
    def is_empty(self):
        return self.front == None
    
    # Question 4
    def insert_front(self, data):
        if self.is_empty():
            n = Node(data)
            self.front = n
            self.rear = n
        else:
            n = Node(data, None, self.front)
            self.front = n
        self.items_count += 1

    # Question 5
    def insert_rear(self, data):
        if self.is_empty():
            n = Node(data)
            self.front = n 
            self.rear = n
        else:
            n = Node(data, self.rear)
            self.rear.next = n
            self.rear = n
        self.items_count += 1
    
    # Question 6
    def delete_front(self):
        if self.is_empty():
            return IndexError("Deque is Empty")
        else:
            self.front = self.front.next
        self.items_count -= 1
    
    # Question 7:
    def delete_rear(self):
        if self.is_empty():
            return IndexError("Deque is empty")
        else:
            self.rear = self.rear.prev
        self.items_count -= 1
    
    # Question 8
    def get_front(self):
        if self.is_empty():
            return IndexError("Deque is Empty")
        else:
            return self.front.item
        
    # Quesiton 9
    def get_rear(self):
        if self.is_empty():
            return IndexError("Deque is empty")
        else:
            return self.rear.item
        
    # Question 10
    def size(self):
        return self.items_count
    
q1 = Deque()
q1.insert_front(30)
q1.insert_front(20)
q1.insert_front(10)
q1.insert_rear(40)
q1.insert_rear(50)
print(q1.get_front(), q1.get_rear())
print("size=" , q1.size())
q1.delete_front()
print(q1.get_front(), q1.get_rear())
print("size=" , q1.size())
q1.delete_rear()
print(q1.get_front(), q1.get_rear())
print("size=" , q1.size())
