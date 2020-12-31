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
                    url: `/users/${this.userId}/follow`,
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
                    url: `/users/${this.userId}/follow`,
                    datatype: 'json',
                    success: () => {
                        this.$el.data('initial-follow-state', 'unfollowed');
                    },
                    error: console.log()
                })
            }

            this.render();
        })

    }
}



module.exports = FollowToggle;
