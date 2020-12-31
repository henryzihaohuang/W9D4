const FollowToggle = require("./follow_toggle");

// window.FollowToggle = FollowToggle;

$(() => {
    debugger
    $(".follow-toggle").each( function(index, el) {
        return new FollowToggle(el);
    });

});


