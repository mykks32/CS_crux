# Question 1
class Node:
    def __init__(self,item=None,prev=None,next=None):
        self.item=item
        self.prev=prev
        self.next=next

class CDL:
    # Question 2
    def __init__(self, start=None):
        self.start = start 

    # Question 3
    def is_empty(self):
        return self.start == None
    
    # Question 4:
    def insert_at_start(self, data):
        n=Node(data)
        if self.is_empty():
            n.next=n
            n.prev=n
        else:
            n.next=self.start
            n.prev=self.start.prev
            self.start.prev.next=n
            self.start.prev=n
        self.start=n

    # Question 5
    def insert_at_last(self, data):
        n = Node(data)
        if self.is_empty():
            n.next = n
            n.prev = n
        else:
            n.prev=self.start.prev
            n.next = self.start
            self.start.prev.next=n
            self.start.prev=n

    # Question 6:
    def search(self, data):
        if not self.is_empty():
            temp = self.start.next
            while temp != self.start:
                if temp.item == data:
                    return temp
                temp = temp.next
            return None
        return None
    
    # Question 7
    def insert_after(self, temp, data):
        if temp is not None:
            n = Node(data, temp, temp.next)
            temp.next.prev = n
            temp.next = n



    # Question 8
    def print_list(self):
        if not self.is_empty():
            temp = self.start
            while temp.next != self.start:
                print(temp.item, end=" ")
                temp = temp.next
            print(temp.item)

    # Question 10:
    def delete_first(self):
        if not self.is_empty():
            if self.start.next == self.start:
                self.start = None
            else:
                self.start.next.prev = self.start.prev
                self.start.prev.next = self.start.next
                self.start = self.start.next
    
    # Question 11:
    def delete_last(self):
        if not self.is_empty():
            if self.start.next == self.start:
                self.start = None
            else:
                self.start.prev.prev.next = self.start
                self.start.prev = self.start.prev.prev

    # Question 12:
    def delete_item_using_search(self, temp):
        if temp is not None:
            if temp.next == self.start and temp.prev == self.start:
                self.delete_first
            elif temp.next == self.start:
                self.delete_last
            else:
                temp.prev.next = temp.next
                temp.next.prev = temp.prev
    def delete_item(self, data):
        if self.start is not None:
            if self.start.next == self.start and self.start.prev == self.start:
                if self.start.item == data:
                    self.delete_first()
            else:
                temp = self.start.next
                while temp != self.start:
                    if temp.item == data:
                        temp.next.prev = temp.prev
                        temp.prev.next = temp.next
                    temp = temp.next
                if temp.item == data:
                    self.delete_last()

    def __iter__(self):
        return CDLIterator(self.start)

# Question 9
class CDLIterator:
    def __init__(self,start):
        self.current=start
        self.start=start
        self.count=0
    def __iter__(self):
        return self
    def __next__(self):
        if self.current is None:
            raise StopIteration
        if self.current==self.start and self.count==1:
            raise StopIteration
        else:
            self.count=1
        data=self.current.item
        self.current=self.current.next
        return data

cdl = CDL()
cdl.insert_at_start(50)
cdl.insert_at_start(60)
cdl.insert_at_start(55)
cdl.insert_at_start(56)
cdl.insert_at_last(51)
cdl.insert_at_last(64)
cdl.insert_at_last(66)
cdl.insert_after(cdl.search(51), 97)
cdl.delete_first()
cdl.delete_last()
cdl.delete_item_using_search(cdl.search(50))
# cdl.delete_item(60)
# cdl.delete_item(64)
# cdl.delete_item(97)
# cdl.delete_item(51)
cdl.print_list()
for x in cdl:
    print(x, end=" ")
print()

    # Question 5:
#     def insert_at_last(self, data):
#         n = Node(data)
#         if self.is_empty:
#             n.next = n
#             self.last = n
#         else:
#             n.next = self.last.next
#             self.last.next = n
#             self.last = n

#     # Question 6: searching consist of adding while loop for the next if it equeal then it ends so check last node too
#     def search(self, data):
#         if self.is_empty():
#             return None
#         temp = self.last.next
#         while temp!=self.last:
#             if temp.item == data:
#                 return temp
#             temp = temp.next
#         if temp.item == data:
#             return temp
#         return None
    
#     # Question 7:
#     def insert_after(self, temp, data):
#         if temp is not None:
#             n = Node(data, temp.next)
#             temp.next = n
#             if temp == self.last:
#                 self.last = n
    
#     # Question 8:
#     def print_all(self):
#         if self.is_empty():
#             return None
#         temp = self.last.next
#         while temp != self.last:
#             print(temp.item, end=' ')
#             temp = temp.next
#         print(temp.item)

#     # Question 10:
#     def delete_first(self):
#         if not self.is_empty():
#             if self.last.next==self.last:
#                 self.last=None
#             else:
#                 self.last.next=self.last.next.next
    
#     # Question 11:
#     def delete_last(self):
#         if not self.is_empty():
#             if self.last.next==self.last:
#                 self.last=None
#             else:
#                 temp=self.last.next
#                 while temp.next!=self.last:
#                     temp=temp.next
#                 temp.next=self.last.next
#                 self.last=temp
        
#     # Question 12:
#     def delete_item(self, data):
#         if not self.is_empty():
#             if self.last.next==self.last:
#                 if self.last.item==data:
#                     self.last=None
#             else:
#                 if self.last.next.item==data:
#                     self.delete_first()
#                 else:
#                     temp=self.last.next
#                     while temp!=self.last:
#                         if temp.next==self.last:
#                             if self.last.item==data:
#                                 self.delete_last()
#                             break
#                         if temp.next.item==data:
#                             temp.next=temp.next.next
#                             break
#                         temp=temp.next
#     # Question 9
#     def __iter__(self):
#         if self.last==None:
#             return CLLIterator(None)
#         else:
#             return CLLIterator(self.last.next)
    
# class CLLIterator:
#     def __init__(self,start):
#         self.current=start 
#         self.start=start
#         self.count=0
#     def __iter__(self):
#         return self
#     def __next__(self):
#         if self.current==None:
#             raise StopIteration
#         if self.current==self.start and self.count==1:
#             raise StopIteration
#         else:
#             self.count=1
#         data=self.current.item
#         self.current=self.current.next
        
#         return data
    
# cll=CLL()
# cll.insert_at_start(10)
# cll.insert_at_start(20)
# cll.insert_at_last(30)
# cll.insert_at_last(40)
# cll.insert_after(cll.search(10),50)
# # 20 10 50 30 40
# for x in cll:
#     print(x,end=' ')
# print()
# cll.print_list()