/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle {
    constructor(el) {
        // debugger
        this.$el = $(el);
        // debugger
        this.userId = this.$el.data('user-id');
        // debugger
        this.followState = this.$el.data('initial-follow-state');
        debugger
        this.render();
        debugger
        this.handleClick();
    }

    render() {
        debugger
        if (this.followState === "unfollowed") {
            this.$el.text("Follow!");
        } else if(this.followState === "followed") {
            this.$el.text("Unfollow!")
        }
    };

    handleClick(){
        debugger
        this.$el.on("click", e => {
            e.preventDefault();
            debugger

            if (this.followState === "unfollowed"){

                debugger
                return $.ajax({
                    method:"POST",
                    url: '/users/:user_id/follow',
                    datatype: 'json',
                    success: () => {
                        this.$el.data('initial-follow-state', 'followed');
                    },
                    error: console.log('error')
                })

            } else if(this.followState === "followed") {
                debugger
                return $.ajax({
                    method: "DELETE",
                    url: '/users/:user_id/follow',
                    datatype: 'json',
                    success: () => {
                        this.$el.data('initial-follow-state', 'unfollowed');
                    },
                    error: console.log('error')
                })
            }

            this.render();
        })

    }
}



module.exports = FollowToggle;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

// window.FollowToggle = FollowToggle;

$(() => {
    debugger
    $(".follow-toggle").each( function(index, el) {
        return new FollowToggle(el);
    });

});



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map