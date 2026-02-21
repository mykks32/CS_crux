# question 1
class Node:
    def __init__(self, item=None, next=None):
        self.item = item
        self.next = next

class SLL:
    #question 2
    def __init__(self, start=None):
        self.start = start
    
    # question 3
    def is_empty(self):
        return self.start is None
    
    # question 4
    def insert_at_start(self, data):
        n = Node(data, self.start)
        self.start = n

    # question 5
    def insert_at_last(self, data):
        n = Node(data)
        if not self.is_empty():
            temp = self.start
            while temp.next is not None:
                temp = temp.next
            temp.next = n
        else:
            self.start = n

    # question 6
    def search(self, data):
        temp = self.start
        while temp is not None:
            if temp.item == data:
                return temp
            temp = temp.next
        return None
    
    # question 7
    def insert_after(self, target_data, data):
        temp = self.search(target_data)
        if temp is not None:
            n = Node(data, temp.next)
            temp.next = n

    # question 8
    def print_list(self):
        temp = self.start
        while temp is not None:
            print(temp.item, end=" ")
            temp = temp.next
        print()

    # question 9

    # question 10
    def delete_first(self):
        if self.start is not None:
            self.start = self.start.next
        pass
    # question 11
    def delete_last(self):
        if self.start is None:
            pass
        elif self.start.next is None:
            self.start = None
        else:
            temp = self.start
            while temp.next.next is not None:
                temp = temp.next
            temp.next = None

    # question 12 
    def delete_item(self, data):
        if self.start is None:
            pass
        elif self.start.next is None:
            if self.start.item == data:
                self.start = None
        else:
            temp = self.start
            if temp.item == data:
                self.start = temp.next
            else:
                while temp.next is not None:
                    if temp.next.item == data:
                        temp.next = temp.next.next
                        return temp.next
                    temp = temp.next
                return None    


# Driver Code
# myList = SLL()
# myList.insert_at_start(50)
# myList.insert_at_last(60)
# myList.insert_at_last(90)
# myList.insert_after(50, 55) 
# myList.print_list()
# myList.delete_last()
# myList.delete_first()
# myList.delete_item(60)
# myList.print_list()

