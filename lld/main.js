        //Classes
    // book - name, author, isbn, who borrowed?, is available?,  last issued/due date?
    // Member - name, email,current books borrowed, history, 
    // librarian - add/rem book from catalog, issued book management - return, assign, new books?
    // borrowing record - book name, issuer?, issued to, when issued? , 
    // Catalog - name of book, author

    // Methods
    // books - (name, author, isbn), mark available and unavailable
    //Member - (name, email),  borrowBook(), returnBook()
    // librarian - (name, email), searchCatalog(query), issueBook(book), removeBook(book)
    //catalog - (name ), addBook(book), removeBook(book), searchCatalog(query) 
    // BorrowHistory - (member / Book name, burrDate, retDate), isReturned()
    //library -  (), registerMember(member), deactivateMember(member), 

    //Tasks BreakDown
    //M



    //Functions - relation between classes
    // books - many to 1 member, many to 1 for catalog, 
    // catalog - 1 to many books -> books
    // librarian -> catalog
    // member - can have diff types of books -> borrowing record

    //Inheritance - library and member on roles


