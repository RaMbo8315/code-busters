$(document).ready(function() {
    var newTicket = $("#modalSubmitBtn");
    var ticketModal = $("#ticketModal");
    // Adding event listeners to the form to create a new object, 
    $(document).on("submit", "#modalSubmitBtn", handleTicketFormSubmit);
  
    // A function to handle what happens when the form is submitted to create a new ticket
    function handleTicketFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!user-name.val().trim()) {
        return;
      }
      // Build our object from the form fields
      var newTicket = {
        clientName: $("#clientId").val(),
        assigned_to: $("#assignedTech"),
        service: $("#selected-service").val(),
        comments: $("#comments-text").val()
        
      }     
      $.post("/api/admin", newTicket)
      .then(function() {
            console.log("Ticket created!")
    }
    
};
})