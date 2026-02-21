# Question 1
class Node:
    def __init__(self, item=None, next=None):
        self.item = item
        self.next = next

class CLL:
    # Question 2
    def __init__(self, last=None):
        self.last = last 

    # Question 3
    def is_empty(self):
        return self.last == None
    
    # Question 4:
    def insert_at_start(self, data):
        n=Node(data)
        if self.is_empty():
            n.next=n
            self.last=n
        else:
            n.next=self.last.next
            self.last.next=n

    # Question 5:
    def insert_at_last(self, data):
        n=Node(data)
        if self.is_empty():
            n.next=n
            self.last=n
        else:
            n.next=self.last.next
            self.last.next=n
            self.last=n

    # Question 6: searching consist of adding while loop for the next if it equeal then it ends so check last node too
    def search(self, data):
        if self.is_empty():
            return None
        temp=self.last.next
        while temp!=self.last:
            if temp.item==data:
                return temp
            temp=temp.next
        if temp.item==data:
            return temp
        return None
    
    # Question 7:
    def insert_after(self, temp, data):
        if temp is not None:
            n=Node(data,temp.next)
            temp.next=n
            if temp==self.last:
                self.last=n
    
    # Question 8:
    def print_all(self):
        if not self.is_empty():
            temp=self.last.next
            while temp!=self.last:
                print(temp.item,end=' ')
                temp=temp.next
            print(temp.item)

    # Question 10:
    def delete_first(self):
        if not self.is_empty():
            if self.last.next==self.last:
                self.last=None
            else:
                self.last.next=self.last.next.next
    
    # Question 11:
    def delete_last(self):
        if not self.is_empty():
            if self.last.next==self.last:
                self.last=None
            else:
                temp=self.last.next
                while temp.next!=self.last:
                    temp=temp.next
                temp.next=self.last.next
                self.last=temp
        
    # Question 12:
    def delete_item(self, data):
        if not self.is_empty():
            if self.last.next==self.last:
                if self.last.item==data:
                    self.last=None
            else:
                if self.last.next.item==data:
                    self.delete_first()
                else:
                    temp=self.last.next
                    while temp!=self.last:
                        if temp.next==self.last:
                            if self.last.item==data:
                                self.delete_last()
                            break
                        if temp.next.item==data:
                            temp.next=temp.next.next
                            break
                        temp=temp.next
    # Question 9
    def __iter__(self):
        if self.last==None:
            return CLLIterator(None)
        else:
            return CLLIterator(self.last.next)
    
class CLLIterator:
    def __init__(self,start):
        self.current=start 
        self.start=start
        self.count=0
    def __iter__(self):
        return self
    def __next__(self):
        if self.current==None:
            raise StopIteration
        if self.current==self.start and self.count==1:
            raise StopIteration
        else:
            self.count=1
        data=self.current.item
        self.current=self.current.next
        
        return data
    
cll=CLL()
cll.insert_at_start(10)
cll.insert_at_start(20)
cll.insert_at_last(30)
cll.insert_at_last(40)
cll.insert_after(cll.search(10),50)
cll.print_all()
# 20 10 50 30 40
for x in cll:
    print(x,end=' ')
print()
cll.print_all()