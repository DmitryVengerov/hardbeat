(function() {
  var getTriggerElement = function(el) {
    var isCollapse = el.getAttribute('data-collapse');
    if (isCollapse !== null) {
      console.log(isCollapse);
      return el;
    } else {
      var isParentCollapse = el.parentNode.getAttribute('data-collapse');
      console.log(parentNode);
      return (isParentCollapse !== null) ? el.parentNode : undefined;
    }

  };
  // A handler for click on toggle button
  var collapseClickHandler = function(event) {  
  	var triggerEl = getTriggerElement(event.target);
    console.log(triggerEl.value)
    if (triggerEl === undefined) {
      event.preventDefault();
      return false;
    }
    // If the target element exists
    var targetEl = document.querySelector(triggerEl.getAttribute('data-target'));
    if (targetEl) {
      //triggerEl.classList.toggle('-active');
      targetEl.classList.toggle('-active');
    }
  };
  // Delegated event
  document.addEventListener('click', collapseClickHandler, false);
})(document, window);
