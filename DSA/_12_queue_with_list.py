class Queue:
    # Question 1
    def __init__(self):
        self.mylist = []
    
    # Question 2
    def is_empty(self):
        return len(self.mylist) == 0

    # Question 3
    def enqueue(self,data):
        self.mylist.append(data)

    # Question 4
    def dequeue(self):
        if not self.is_empty():
            self.mylist.pop(0)
        else:
            raise IndexError("Queue Underflow")
    
    # Question 5
    def get_front(self):
        if not self.is_empty():
            return self.mylist[0]
        else:
            raise IndexError("Queue Underflow")

    # Question 6
    def get_rear(self):
        if not self.is_empty():
            return self.mylist[-1]
        else:
            raise IndexError("Queue Underflow")
    
    def size(self):
        return len(self.mylist)
    
q1=Queue()
try:
    print(q1.get_front())
except IndexError as e:
    print(e.args[0])

q1.enqueue(10)
q1.enqueue(20)
q1.enqueue(30)
q1.enqueue(40)
q1.enqueue(50)
print("Front=",q1.get_front(),"Rear=",q1.get_rear())
try:
    q1.dequeue()
    print("Queue has now",q1.size(),"elements")
except IndexError as e:
    print(e.args[0])