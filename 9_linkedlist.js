class node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class linkedList{

    constructor(){
        this.head = null;
    }

    // to insert node into the linkedlist
    insertNode(data){

        var newnode = new node(data);

        if ( this.head == null){
            this.head = newnode
        }
        else{
            var current = this.head

            while(current.next != null){
                current = current.next
            }
            current.next = newnode
        }
    }
    printLL(){
        var current = this.head
        var myLL =''
        while(current.next != null){
            myLL= myLL + current.data+'------>';
            current = current.next
        }
       myLL = myLL+ current.data+'-------->Null';
       console.log(myLL);
    }
}


l = new linkedList()
l.insertNode(5)
l.insertNode(5)
l.insertNode(5)
l.printLL()